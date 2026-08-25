(function () {
  "use strict";

  const data = window.FOOD_TECH_FOLIO_DATA;
  if (!data) return;

  const folioProcessVisualByStage = Object.freeze({
    "stage-06-production": "p09-production-timeline",
    "stage-08-evaluation": "p10-evidence-filter"
  });

  let textState;
  let imageState;
  let saveTimer = null;
  let migrationMessage = "";
  let storageErrorMessage = "";

  function freshTextState() {
    return {
      schemaVersion: data.schemaVersion,
      courseId: data.courseId,
      projectId: data.projectId,
      sourceVersion: data.sourceVersion,
      student: { name: "", classGroup: "" },
      responses: {},
      savedAt: null
    };
  }

  function freshImageState() {
    return {
      schemaVersion: data.schemaVersion,
      courseId: data.courseId,
      projectId: data.projectId,
      images: {},
      savedAt: null
    };
  }

  function parseLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || "null");
    } catch (error) {
      storageErrorMessage = "This browser could not read saved folio work. Download a backup if the page still shows work, and check browser storage settings.";
      return null;
    }
  }

  function hasLocalRecord(key) {
    try {
      return Boolean(localStorage.getItem(key));
    } catch (error) {
      storageErrorMessage = "This browser could not read saved folio work. Download a backup if the page still shows work, and check browser storage settings.";
      return false;
    }
  }

  function migrateLegacy(payload) {
    const next = freshTextState();
    if (!payload || typeof payload !== "object") return next;
    const student = payload.student || {};
    next.student.name = String(student.name || payload.studentName || "");
    next.student.classGroup = String(student.classGroup || payload.studentClass || payload.classGroup || "");
    const sourceResponses = payload.responses || payload.sections || {};
    data.stages.forEach((stage) => {
      const oldStage = sourceResponses[stage.id] || sourceResponses[String(stage.number)] || {};
      next.responses[stage.id] = {};
      stage.fields.forEach((field) => {
        const direct = oldStage[field.id];
        const flattened = payload[`${stage.id}:${field.id}`];
        next.responses[stage.id][field.id] = String(direct == null ? (flattened == null ? "" : flattened) : direct);
      });
    });
    next.savedAt = payload.savedAt || new Date().toISOString();
    return next;
  }

  function normaliseTextState(payload) {
    if (!payload || typeof payload !== "object") return freshTextState();
    if (Number(payload.schemaVersion) < data.schemaVersion) return migrateLegacy(payload);
    if (payload.courseId !== data.courseId || payload.projectId !== data.projectId || Number(payload.schemaVersion) !== data.schemaVersion) return freshTextState();
    const clean = freshTextState();
    clean.student.name = String(payload.student?.name || "");
    clean.student.classGroup = String(payload.student?.classGroup || "");
    clean.savedAt = payload.savedAt || null;
    data.stages.forEach((stage) => {
      clean.responses[stage.id] = {};
      stage.fields.forEach((field) => {
        clean.responses[stage.id][field.id] = String(payload.responses?.[stage.id]?.[field.id] || "");
      });
    });
    return clean;
  }

  function normaliseImageState(payload) {
    const clean = freshImageState();
    if (!payload || typeof payload !== "object") return clean;
    if (payload.courseId !== data.courseId || payload.projectId !== data.projectId) return clean;
    clean.savedAt = payload.savedAt || null;
    Object.entries(payload.images || {}).forEach(([stageId, image]) => {
      if (!data.stages.some((stage) => stage.id === stageId && stage.image) || !validStoredImage(image)) return;
      clean.images[stageId] = {
        name: String(image.name || "student-image"),
        type: image.type,
        size: Number(image.size) || estimatedDataBytes(image.dataUrl),
        dataUrl: image.dataUrl,
        addedAt: image.addedAt || null
      };
    });
    return clean;
  }

  function loadStates() {
    const current = parseLocal(data.textStorageKey);
    if (current) {
      textState = normaliseTextState(current);
    } else {
      const legacyKey = data.legacyKeys.find(hasLocalRecord);
      if (legacyKey) {
        textState = migrateLegacy(parseLocal(legacyKey));
        migrationMessage = "Compatible writing from an earlier Party Task folio was migrated to the current local schema.";
      } else {
        textState = freshTextState();
      }
    }
    imageState = normaliseImageState(parseLocal(data.imageStorageKey));
    saveStates(false);
  }

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderFolioProcessVisual(stageId) {
    const visualId = folioProcessVisualByStage[stageId];
    const visuals = Array.isArray(window.FOOD_TECH_VISUALS) ? window.FOOD_TECH_VISUALS : [];
    const visual = visuals.find((item) => item.id === visualId && item.category === "process-visual");
    if (!visual) return "";
    const titleId = `${visual.id}-folio-title`;
    return `<aside class="folio-process-visual" data-process-visual="${esc(visual.id)}" aria-labelledby="${esc(titleId)}">
      <figure><img src="${esc(visual.file)}" alt="${esc(visual.alt)}" decoding="async"><figcaption>${esc(visual.caption)}</figcaption></figure>
      <div class="folio-process-copy"><p class="folio-stage-number">Process guide</p><h4 id="${esc(titleId)}">${esc(visual.title)}</h4><p><strong>Use it to:</strong> ${esc(visual.learningPurpose)}</p><p class="folio-process-notice"><strong>Notice:</strong> ${esc(visual.notice)}</p>${visual.openLarger ? `<a class="folio-process-open" href="${esc(visual.file)}" target="_blank" rel="noopener" aria-label="Open larger view of ${esc(visual.title)}">Open larger</a>` : ""}</div>
    </aside>`;
  }

  function wordCount(value) {
    return String(value || "").trim().split(/\s+/).filter(Boolean).length;
  }

  function stageResponse(stageId) {
    if (!textState.responses[stageId]) textState.responses[stageId] = {};
    return textState.responses[stageId];
  }

  function stageReady(stage) {
    const response = stageResponse(stage.id);
    return stage.fields.every((field) => wordCount(response[field.id]) >= Math.min(Number(field.minWords) || 1, 12));
  }

  function stageStarted(stage) {
    const response = stageResponse(stage.id);
    return stage.fields.some((field) => String(response[field.id] || "").trim().length > 0) || Boolean(imageState.images[stage.id]);
  }

  function nextStage() {
    return data.stages.find((stage) => !stageReady(stage)) || data.stages[data.stages.length - 1];
  }

  function saveStates(showStatus, message) {
    textState.savedAt = new Date().toISOString();
    imageState.savedAt = textState.savedAt;
    try {
      localStorage.setItem(data.textStorageKey, JSON.stringify(textState));
      localStorage.setItem(data.imageStorageKey, JSON.stringify(imageState));
      storageErrorMessage = "";
      if (showStatus) setStatus(message || "Saved in this browser.");
      refreshProgress();
      return true;
    } catch (error) {
      storageErrorMessage = "This browser could not save the latest change. Download a backup now, then remove large images if needed.";
      setStatus(storageErrorMessage, true);
      return false;
    }
  }

  function scheduleSave() {
    window.clearTimeout(saveTimer);
    setStatus("Saving…");
    saveTimer = window.setTimeout(() => saveStates(true), 300);
  }

  function setStatus(message, isError) {
    const status = document.getElementById("folio-save-status");
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("is-error", Boolean(isError));
  }

  function renderStage(stage) {
    const response = stageResponse(stage.id);
    const image = imageState.images[stage.id];
    const ready = stageReady(stage);
    const started = stageStarted(stage);
    const activityLinks = stage.activityIds.map((id) => {
      const activity = window.FOOD_TECH_ACTIVITY_DATA?.activities?.find((item) => item.id === id);
      const title = activity ? activity.title : id.replace(/^act-\d+-/, "").replace(/-/g, " ");
      return `<a href="activities.html#${esc(id)}">${esc(title)}</a>`;
    }).join("");
    return `<article class="folio-stage" id="${esc(stage.id)}">
      <header class="folio-stage-head"><div><p class="folio-stage-number">Stage ${stage.number} of ${data.stages.length}</p><h3>${esc(stage.title)}</h3></div><span class="folio-stage-status ${ready ? "is-ready" : started ? "is-started" : ""}" data-stage-status>${ready ? "Ready to review" : started ? "In progress" : "Not started"}</span></header>
      <div class="folio-info-grid"><div><strong>Do</strong><p>${esc(stage.action)}</p></div><div><strong>Why</strong><p>${esc(stage.why)}</p></div><div><strong>Evidence</strong><p>${esc(stage.evidence)}</p></div></div>
      <p class="folio-prompt"><strong>Think:</strong> ${esc(stage.prompt)}</p>
      ${renderFolioProcessVisual(stage.id)}
      <details class="folio-support"><summary>Sentence starters and source boundary</summary><ul>${stage.support.map((item) => `<li>${esc(item)}</li>`).join("")}</ul><p><strong>Source:</strong> ${esc(stage.source)}</p>${activityLinks ? `<p><strong>Practice first:</strong> ${activityLinks}</p>` : ""}</details>
      <div class="folio-fields">${stage.fields.map((field) => `<label class="folio-field"><span>${esc(field.label)}</span><textarea data-stage="${esc(stage.id)}" data-field="${esc(field.id)}" placeholder="${esc(field.placeholder)}">${esc(response[field.id] || "")}</textarea><small><span data-word-count="${esc(stage.id)}:${esc(field.id)}">${wordCount(response[field.id])}</span> words · aim for enough detail to make the evidence clear</small></label>`).join("")}</div>
      ${stage.image ? `<section class="folio-image-box" data-image-box="${esc(stage.id)}"><h4>${esc(stage.imageLabel)}</h4><p>JPEG, PNG or WebP only; maximum ${Math.round(data.maxImageBytes / 1024)} KB. The image stays in this browser unless included in a backup or export.</p><div class="folio-image-actions"><label class="folio-file-button">Choose image<input type="file" accept="image/jpeg,image/png,image/webp" data-image-input="${esc(stage.id)}"></label>${image ? `<button type="button" class="folio-quiet" data-remove-image="${esc(stage.id)}">Remove image</button>` : ""}</div>${image ? `<figure><img src="${image.dataUrl}" alt="Student evidence preview for ${esc(stage.title)}"><figcaption>${esc(image.name)} · ${Math.round(image.size / 1024)} KB · browser-local</figcaption></figure>` : `<p class="folio-no-image">No image added. Images are optional unless the reissued task tells you otherwise.</p>`}<p class="folio-image-feedback" aria-live="polite"></p></section>` : ""}
    </article>`;
  }

  function renderFolio() {
    const slot = document.querySelector('[data-owner="stage-11"]');
    if (!slot) return;
    const next = nextStage();
    slot.classList.remove("integration-slot");
    slot.classList.add("folio-workspace");
    slot.innerHTML = `<section class="folio-orientation"><span class="slot-label">Working folio</span><h2>Eight calm stages from brief to evaluation</h2><p>${esc(data.orientation.purpose)}</p><div class="folio-boundaries"><div class="notice"><strong>Saving and recovery</strong>${esc(data.orientation.saving)}</div><div class="notice teacher"><strong>Assessment boundary</strong>${esc(data.orientation.assessmentBoundary)}</div><div class="notice"><strong>Image privacy</strong>${esc(data.orientation.imagePrivacy)}</div></div></section>
      <section class="folio-dashboard" aria-label="Folio controls"><div class="folio-student"><label>Student name <input id="folio-student-name" type="text" autocomplete="name" value="${esc(textState.student.name)}"></label><label>Class or group <input id="folio-class-group" type="text" value="${esc(textState.student.classGroup)}" placeholder="Optional"></label></div><div class="folio-progress"><strong id="folio-progress-text"></strong><p id="folio-next-action"></p><a class="button" id="folio-next-link" href="#${esc(next.id)}">Go to next action</a><p id="folio-save-status"${storageErrorMessage ? ' class="is-error"' : ""} role="status">${esc(storageErrorMessage || migrationMessage || "Autosave is on.")}</p></div></section>
      <div class="folio-tools" aria-label="Folio file tools"><button type="button" class="button" data-folio-action="backup">Download editable backup</button><label class="folio-file-button">Restore backup<input id="folio-restore-input" type="file" accept="application/json"></label><button type="button" class="folio-quiet" data-folio-action="export">Export self-contained submission copy</button><button type="button" class="folio-quiet" data-folio-action="print">Print / save PDF</button><button type="button" class="folio-reset" data-folio-action="reset">Reset this folio</button></div>
      <p class="folio-tool-note">An editable backup is for continuing work. The self-contained HTML export is a readable submission copy with prompt context and imported images. Printing creates a separate paper/PDF view. Check the teacher-confirmed submission method before handing anything in.</p>
      <section class="folio-stages" aria-label="Party Task evidence stages">${data.stages.map(renderStage).join("")}</section>`;
    bindFolio();
    refreshProgress();
  }

  function bindFolio() {
    const folio = document.querySelector(".folio-workspace");
    if (!folio || folio.dataset.bound === "true") return;
    folio.dataset.bound = "true";
    folio.addEventListener("input", handleInput);
    folio.addEventListener("change", handleChange);
    folio.addEventListener("click", handleClick);
  }

  function handleInput(event) {
    if (event.target.id === "folio-student-name") textState.student.name = event.target.value;
    else if (event.target.id === "folio-class-group") textState.student.classGroup = event.target.value;
    else if (event.target.dataset.stage && event.target.dataset.field) {
      stageResponse(event.target.dataset.stage)[event.target.dataset.field] = event.target.value;
      const count = document.querySelector(`[data-word-count="${CSS.escape(`${event.target.dataset.stage}:${event.target.dataset.field}`)}"]`);
      if (count) count.textContent = wordCount(event.target.value);
    } else return;
    scheduleSave();
    refreshProgress();
  }

  function handleChange(event) {
    if (event.target.dataset.imageInput) handleImage(event.target.dataset.imageInput, event.target.files?.[0], event.target);
    if (event.target.id === "folio-restore-input") restoreBackup(event.target.files?.[0], event.target);
  }

  function handleClick(event) {
    const actionButton = event.target.closest("[data-folio-action]");
    if (actionButton) {
      const action = actionButton.dataset.folioAction;
      if (action === "backup") downloadBackup();
      if (action === "export") exportSubmission();
      if (action === "print") window.print();
      if (action === "reset") guardedReset();
      return;
    }
    const removeButton = event.target.closest("[data-remove-image]");
    if (removeButton) removeImage(removeButton.dataset.removeImage);
  }

  function handleImage(stageId, file, input) {
    if (!file) return;
    const box = document.querySelector(`[data-image-box="${CSS.escape(stageId)}"]`);
    const feedback = box?.querySelector(".folio-image-feedback");
    const fail = (message) => {
      if (feedback) feedback.textContent = message;
      input.value = "";
    };
    if (!data.acceptedImageTypes.includes(file.type)) return fail("That file type is not accepted. Use JPEG, PNG or WebP.");
    if (file.size > data.maxImageBytes) return fail(`That image is too large (${Math.round(file.size / 1024)} KB). Resize or crop it below ${Math.round(data.maxImageBytes / 1024)} KB.`);
    const reader = new FileReader();
    reader.onerror = () => fail("The image could not be read.");
    reader.onload = () => {
      const dataUrl = String(reader.result || "");
      if (!dataUrl.startsWith(`data:${file.type};base64,`)) return fail("The image data did not match its file type.");
      imageState.images[stageId] = { name: file.name, type: file.type, size: file.size, dataUrl, addedAt: new Date().toISOString() };
      if (!saveStates(true, "Image saved locally and will be included in backup and export.")) delete imageState.images[stageId];
      renderFolio();
      document.getElementById(stageId)?.scrollIntoView({ block: "nearest" });
    };
    reader.readAsDataURL(file);
  }

  function removeImage(stageId) {
    if (!window.confirm("Remove this browser-local image from the folio? It may still exist in a backup you already downloaded.")) return;
    delete imageState.images[stageId];
    saveStates(true, "Image removed from this browser-local folio.");
    renderFolio();
    document.getElementById(stageId)?.scrollIntoView({ block: "nearest" });
  }

  function estimatedDataBytes(dataUrl) {
    const payload = String(dataUrl || "").split(",")[1] || "";
    return Math.ceil(payload.length * 0.75);
  }

  function validStoredImage(image) {
    if (!image || typeof image !== "object" || !data.acceptedImageTypes.includes(image.type)) return false;
    if (!String(image.dataUrl || "").startsWith(`data:${image.type};base64,`)) return false;
    return estimatedDataBytes(image.dataUrl) <= data.maxImageBytes + 8;
  }

  function safeName() {
    return (textState.student.name || "student").replace(/[^a-z0-9]+/gi, "_").replace(/^_+|_+$/g, "") || "student";
  }

  function download(filename, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function backupPayload() {
    return {
      kind: "editable-party-folio-backup",
      courseId: data.courseId,
      projectId: data.projectId,
      schemaVersion: data.schemaVersion,
      exportedAt: new Date().toISOString(),
      includesImages: true,
      text: textState,
      images: imageState
    };
  }

  function downloadBackup() {
    saveStates(false);
    download(`year8_food_tech_party_folio_backup_${safeName()}_${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(backupPayload(), null, 2), "application/json");
    setStatus("Editable backup downloaded. It includes writing and imported images.");
  }

  function restoreBackup(file, input) {
    if (!file) return;
    if (file.size > 12 * 1024 * 1024) {
      setStatus("That backup is too large to validate safely in this page.", true);
      input.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => setStatus("The backup file could not be read.", true);
    reader.onload = () => {
      try {
        const payload = JSON.parse(String(reader.result || ""));
        if (payload.courseId !== data.courseId || payload.projectId !== data.projectId) throw new Error("This backup belongs to a different course or project.");
        if (Number(payload.schemaVersion) > data.schemaVersion) throw new Error("This backup was made by a newer folio version.");
        const candidateText = Number(payload.schemaVersion) < data.schemaVersion ? migrateLegacy(payload.text || payload) : normaliseTextState(payload.text || payload);
        const candidateImages = normaliseImageState(payload.images || freshImageState());
        textState = candidateText;
        imageState = candidateImages;
        if (!saveStates(false)) throw new Error("The restored folio could not be stored on this device.");
        migrationMessage = "Backup restored. Check the student details, images and every stage before continuing.";
        renderFolio();
      } catch (error) {
        setStatus(error.message || "This is not a valid Party Task folio backup.", true);
      } finally {
        input.value = "";
      }
    };
    reader.readAsText(file);
  }

  function exportSubmission() {
    saveStates(false);
    const generated = new Date().toLocaleString("en-AU", { dateStyle: "long", timeStyle: "short" });
    const stages = data.stages.map((stage) => {
      const response = stageResponse(stage.id);
      const image = imageState.images[stage.id];
      return `<section class="stage"><p class="stage-no">Stage ${stage.number}</p><h2>${esc(stage.title)}</h2><p><strong>Task:</strong> ${esc(stage.action)}</p><p><strong>Evidence purpose:</strong> ${esc(stage.evidence)}</p>${stage.fields.map((field) => `<article><h3>${esc(field.label)}</h3><div class="response">${esc(response[field.id] || "[No response recorded]").replace(/\n/g, "<br>")}</div></article>`).join("")}${image ? `<figure><img src="${image.dataUrl}" alt="Student evidence for ${esc(stage.title)}"><figcaption>${esc(response.caption || image.name || "Student evidence image")}</figcaption></figure>` : ""}<p class="source"><strong>Source boundary:</strong> ${esc(stage.source)}</p></section>`;
    }).join("");
    const html = `<!doctype html><html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Party Task folio - ${esc(textState.student.name || "student")}</title><style>body{max-width:900px;margin:0 auto;padding:32px;color:#1d2b22;background:#fff;font:17px/1.55 system-ui,sans-serif}header{border-bottom:5px solid #23664b;padding-bottom:18px}h1{margin:.2rem 0;font-size:2.4rem}h2{color:#174936}.boundary{padding:14px;border-left:6px solid #8d395e;background:#fff7fb}.stage{margin:32px 0;padding:22px;border:1px solid #cbd8ce;border-radius:14px;break-inside:avoid}.stage-no{font-weight:800;color:#5d6d63;text-transform:uppercase}.response{padding:12px;background:#f7faf7;border:1px solid #d9e1da;border-radius:8px;white-space:normal}.source{font-size:.9rem;color:#52645a}figure{margin:18px 0}img{max-width:100%;max-height:620px;object-fit:contain;border:1px solid #d9e1da}figcaption{font-size:.9rem;color:#52645a}@media print{body{padding:0}.stage{box-shadow:none}}</style></head><body><header><p>Year 8 Food Technology · Food for Purpose</p><h1>Party Task working folio</h1><p><strong>Student:</strong> ${esc(textState.student.name || "Not entered")}<br><strong>Class/group:</strong> ${esc(textState.student.classGroup || "Not entered")}<br><strong>Exported:</strong> ${esc(generated)}</p><p class="boundary"><strong>Important:</strong> This is a self-contained copy of browser-local work. The Party Task notification, formal criteria and submission method remain Teacher to confirm. This file is not proof of submission or teacher-observed practical performance.</p></header>${stages}<footer><p>Course: ${esc(data.courseId)} · Project: ${esc(data.projectId)} · Schema ${data.schemaVersion}</p></footer></body></html>`;
    download(`year8_food_tech_party_folio_submission_copy_${safeName()}_${new Date().toISOString().slice(0, 10)}.html`, html, "text/html");
    setStatus("Self-contained submission copy downloaded. Check it, then follow the teacher-confirmed submission method.");
  }

  function guardedReset() {
    const phrase = window.prompt("This removes Party Task writing and imported images from this browser. Back up first if you may need them. Type RESET PARTY FOLIO to continue.");
    if (phrase !== "RESET PARTY FOLIO") {
      setStatus("Reset cancelled. Nothing was removed.");
      return;
    }
    try {
      localStorage.removeItem(data.textStorageKey);
      localStorage.removeItem(data.imageStorageKey);
    } catch (error) {
      storageErrorMessage = "This browser could not clear the saved folio. Nothing has been treated as reset; check browser storage settings.";
      setStatus(storageErrorMessage, true);
      return;
    }
    textState = freshTextState();
    imageState = freshImageState();
    migrationMessage = "Folio reset on this device. Downloaded backups were not changed.";
    saveStates(false);
    renderFolio();
  }

  function refreshProgress() {
    const progress = document.getElementById("folio-progress-text");
    const nextText = document.getElementById("folio-next-action");
    const nextLink = document.getElementById("folio-next-link");
    if (!progress || !nextText || !nextLink) return;
    const ready = data.stages.filter(stageReady).length;
    const next = nextStage();
    progress.textContent = `${ready} of ${data.stages.length} stages have enough writing for a first review.`;
    nextText.textContent = ready === data.stages.length ? "Next action: review every stage, images and source details before export." : `Next action: ${next.title}.`;
    nextLink.href = `#${next.id}`;
    nextLink.textContent = ready === data.stages.length ? "Review final folio" : "Go to next action";
    data.stages.forEach((stage) => {
      const card = document.getElementById(stage.id);
      const badge = card?.querySelector("[data-stage-status]");
      if (!badge) return;
      const isReady = stageReady(stage);
      const isStarted = stageStarted(stage);
      badge.textContent = isReady ? "Ready to review" : isStarted ? "In progress" : "Not started";
      badge.className = `folio-stage-status ${isReady ? "is-ready" : isStarted ? "is-started" : ""}`;
    });
  }

  function preparePrintDetails() {
    document.querySelectorAll(".folio-support").forEach((details) => {
      details.dataset.wasOpenBeforePrint = details.open ? "true" : "false";
      details.open = true;
    });
  }

  function restorePrintDetails() {
    document.querySelectorAll(".folio-support").forEach((details) => {
      if (details.dataset.wasOpenBeforePrint === "false") details.open = false;
      delete details.dataset.wasOpenBeforePrint;
    });
  }

  function injectStyles() {
    if (document.getElementById("folio-owned-styles")) return;
    const style = document.createElement("style");
    style.id = "folio-owned-styles";
    style.textContent = `
      .folio-workspace{margin-top:3rem}.folio-orientation{max-width:88ch}.folio-boundaries{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.8rem;margin-top:1rem}.folio-boundaries .notice{margin:0}.folio-dashboard{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;padding:1.1rem;border:1px solid var(--line);border-radius:var(--radius-md);background:#edf6ef}.folio-student{display:grid;grid-template-columns:1fr 1fr;gap:.8rem}.folio-student label,.folio-field{display:grid;gap:.35rem;font-weight:780}.folio-student input{width:100%;min-height:46px;padding:.58rem .7rem;border:1px solid #8aa295;border-radius:10px;background:#fff;font:inherit}.folio-progress{padding-left:1rem;border-left:4px solid var(--leaf-500)}.folio-progress p{margin:.35rem 0}#folio-save-status{font-size:.9rem;color:var(--leaf-700);font-weight:750}#folio-save-status.is-error{color:#9a3412}.folio-tools{display:flex;flex-wrap:wrap;gap:.65rem;margin-top:1rem}.folio-tools button{cursor:pointer;font:inherit}.folio-file-button,.folio-quiet,.folio-reset{display:inline-flex;min-height:46px;align-items:center;justify-content:center;padding:.65rem .9rem;border:1px solid #89a494;border-radius:11px;background:#fff;color:var(--leaf-900);font-weight:780;cursor:pointer}.folio-file-button input{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.folio-reset{color:#7a2538;border-color:#c9a2ad;background:#fff8fa}.folio-tool-note{max-width:88ch;color:var(--muted);font-size:.9rem}.folio-stages{display:grid;gap:1.3rem;margin-top:2rem}.folio-stage{padding:1.35rem;background:#fff;border:1px solid var(--line);border-radius:var(--radius-md);box-shadow:0 7px 22px rgba(35,60,45,.07);scroll-margin-top:1rem}.folio-stage-head{display:flex;gap:1rem;align-items:start;justify-content:space-between}.folio-stage-number{margin:0;color:var(--muted);font-size:.8rem;font-weight:850;letter-spacing:.06em;text-transform:uppercase}.folio-stage h3{margin:.25rem 0;font-size:1.65rem}.folio-stage-status{padding:.28rem .6rem;border-radius:999px;background:#eef1ef;color:var(--muted);font-size:.8rem;font-weight:850;white-space:nowrap}.folio-stage-status.is-started{background:#fff4d7;color:#795514}.folio-stage-status.is-ready{background:#e4f3e8;color:#195b3c}.folio-info-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.8rem;margin:1rem 0}.folio-info-grid>div{padding:.8rem;border:1px solid var(--line);border-radius:10px;background:#f7faf7}.folio-info-grid p{margin:.25rem 0;color:var(--muted)}.folio-prompt{padding:.85rem 1rem;border-left:5px solid var(--mustard);background:#fffaf0}.folio-process-visual{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:1rem;align-items:start;margin:1rem 0;padding:1rem;border:1px solid var(--line);border-radius:12px;background:#f7faf7}.folio-process-visual figure{margin:0}.folio-process-visual img{display:block;width:100%;height:auto;border:1px solid var(--line);border-radius:10px;background:#fff}.folio-process-visual figcaption{margin-top:.45rem;color:var(--muted);font-size:.88rem}.folio-process-copy{min-width:0}.folio-process-copy h4{margin:.2rem 0;font-size:1.25rem}.folio-process-copy p{margin:.5rem 0}.folio-process-notice{padding:.7rem;border-left:5px solid var(--mustard);background:#fffaf0}.folio-process-open{display:inline-flex;min-height:44px;align-items:center;font-weight:800}.folio-support{margin:.75rem 0}.folio-support summary{cursor:pointer;color:var(--leaf-700);font-weight:800}.folio-support a{margin-right:.65rem}.folio-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.9rem}.folio-field{padding:.8rem;border:1px solid var(--line);border-radius:12px;background:#fbfcfb}.folio-field textarea{width:100%;min-height:150px;padding:.7rem;border:1px solid #8aa295;border-radius:9px;background:#fff;color:var(--ink);font:inherit;line-height:1.55;resize:vertical}.folio-field small{color:var(--muted);font-weight:600}.folio-image-box{margin-top:1rem;padding:1rem;border:1px dashed #89a494;border-radius:12px;background:#f7faf7}.folio-image-box h4{margin:0;font-size:1.05rem}.folio-image-box p{margin:.4rem 0;color:var(--muted)}.folio-image-actions{display:flex;flex-wrap:wrap;gap:.55rem;margin:.75rem 0}.folio-image-box figure{margin:1rem 0 0}.folio-image-box img{display:block;max-width:100%;max-height:520px;object-fit:contain;border:1px solid var(--line);border-radius:10px;background:#fff}.folio-image-box figcaption{margin-top:.4rem;color:var(--muted);font-size:.85rem}.folio-image-feedback{min-height:1.2rem;color:#8a4b12!important;font-weight:750}.folio-no-image{font-style:italic}
      @media(max-width:900px){.folio-boundaries{grid-template-columns:1fr}.folio-dashboard{grid-template-columns:1fr}.folio-progress{padding-left:0;padding-top:1rem;border-left:0;border-top:4px solid var(--leaf-500)}.folio-info-grid{grid-template-columns:1fr}}
      @media(max-width:760px){.folio-process-visual{grid-template-columns:1fr}}
      @media(max-width:620px){.folio-student,.folio-fields{grid-template-columns:1fr}.folio-stage-head{display:block}.folio-stage-status{display:inline-block;margin-top:.4rem}.folio-tools>*{width:100%}.folio-field textarea{min-height:185px}}
      @media print{.folio-process-open,.folio-dashboard,.folio-tools,.folio-tool-note,.folio-image-actions,.folio-no-image,.folio-image-feedback,.folio-support summary{display:none!important}.folio-workspace{margin-top:1rem}.folio-orientation .folio-boundaries{display:block}.folio-orientation .notice{margin:.4rem 0}.folio-stage{box-shadow:none;break-inside:auto}.folio-fields{display:block}.folio-field{break-inside:avoid;margin:.6rem 0}.folio-field textarea{min-height:80px;border:1px solid #777}.folio-support{display:block}.folio-info-grid{grid-template-columns:repeat(3,1fr)}.folio-process-visual,.folio-image-box{break-inside:avoid}.folio-image-box img{max-height:340px}}
    `;
    document.head.appendChild(style);
  }

  function init() {
    loadStates();
    injectStyles();
    if (document.querySelector('[data-owner="stage-11"]')) renderFolio();
    window.addEventListener("beforeprint", preparePrintDetails);
    window.addEventListener("afterprint", restorePrintDetails);
  }

  window.FoodTechFolio = Object.freeze({ renderFolio, data, backupPayload });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
