(function () {
  "use strict";

  const data = window.FOOD_TECH_ASSESSMENT_DATA;
  if (!data) return;

  const assessmentProcessVisualIds = ["p07-party-evidence", "p08-costing-workflow"];

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function processVisualById(id) {
    const visuals = Array.isArray(window.FOOD_TECH_VISUALS) ? window.FOOD_TECH_VISUALS : [];
    return visuals.find((visual) => visual.id === id && visual.category === "process-visual") || null;
  }

  function renderAssessmentProcessVisual(visual) {
    const titleId = `${visual.id}-assessment-title`;
    return `<article class="assessment-process-visual" data-process-visual="${esc(visual.id)}" aria-labelledby="${esc(titleId)}">
      <header><p class="assessment-kicker">Project process guide</p><h4 id="${esc(titleId)}">${esc(visual.title)}</h4></header>
      <p><strong>Use it to:</strong> ${esc(visual.learningPurpose)}</p>
      <figure><img src="${esc(visual.file)}" alt="${esc(visual.alt)}" decoding="async"><figcaption>${esc(visual.caption)}</figcaption></figure>
      <p class="assessment-process-notice"><strong>Notice:</strong> ${esc(visual.notice)}</p>
      ${visual.openLarger ? `<a class="assessment-process-open" href="${esc(visual.file)}" target="_blank" rel="noopener" aria-label="Open larger view of ${esc(visual.title)}">Open larger</a>` : ""}
    </article>`;
  }

  function renderAssessmentProcessVisuals() {
    const visuals = assessmentProcessVisualIds.map(processVisualById).filter(Boolean);
    if (!visuals.length) return "";
    return `<section class="assessment-process-visuals" aria-labelledby="assessment-process-title">
      <div class="assessment-process-intro"><p class="assessment-kicker">Working evidence and costing guides</p><h3 id="assessment-process-title">Organise the project evidence; do not infer assessment rules</h3><p>These diagrams support evidence collection and costing practice. They do not set marks, dates, budget, criteria or submission requirements.</p></div>
      <div class="assessment-process-grid">${visuals.map(renderAssessmentProcessVisual).join("")}</div>
    </section>`;
  }

  function statusClass(status) {
    return status === "Confirmed" ? "is-confirmed" : "needs-confirmation";
  }

  function renderScheduleTable() {
    return `<div class="assessment-table-wrap"><table class="assessment-table"><caption>Official Year 8 Food Technology schedule - 2026 handbook, page 24</caption><thead><tr><th scope="col">Task</th><th scope="col">Nature</th><th scope="col">Due</th><th scope="col">Outcomes</th><th scope="col">Weighting</th><th scope="col">Notification</th></tr></thead><tbody>${data.schedule.map((row) => `<tr><th scope="row" data-label="Task">${esc(row.task)}</th><td data-label="Nature">${esc(row.nature)}</td><td data-label="Due">${esc(row.due)}</td><td data-label="Outcomes">${esc(row.outcomes)}</td><td data-label="Weighting">${esc(row.weighting)}</td><td data-label="Notification">Notification not yet reconciled</td></tr>`).join("")}</tbody><tfoot><tr><th scope="row" colspan="4">Official schedule total</th><td>${esc(data.scheduleTotal)}</td><td>Teacher reconciliation required</td></tr></tfoot></table></div>`;
  }

  function renderStatusGrid() {
    return `<div class="assessment-status-grid">${data.confirmationStatus.map((item) => `<article class="assessment-status ${statusClass(item.status)}"><p>${esc(item.domain)}</p><strong>${esc(item.status)}</strong><span>${esc(item.detail)}</span></article>`).join("")}</div>`;
  }

  function renderLanding() {
    const slot = document.querySelector('[data-owner="stage-12"]');
    if (!slot) return;
    slot.classList.remove("integration-slot");
    slot.classList.add("assessment-landing");
    slot.innerHTML = `<section class="assessment-orientation"><span class="slot-label">Verified schedule</span><h2>Official schedule found; Party Task notification needs reconciliation</h2><p>The current Year 8 handbook is the controlling source for the published schedule. The teacher-posted Party Task remains valuable evidence of course intent, but its task number, dates, weighting and outcomes conflict with the handbook or the requested new-syllabus pathway.</p></section>
      <section class="assessment-schedule"><div class="assessment-heading"><div><p class="assessment-kicker">Current official source</p><h3>Year 8 Food Technology assessment schedule</h3></div><a href="${esc(data.handbook.source_url)}" target="_blank" rel="noopener">Open 2026 Year 8 handbook</a></div>${renderScheduleTable()}<p class="assessment-source-note">Source: ${esc(data.handbook.title)}, page ${data.handbook.relevant_page} of ${data.handbook.page_count}. Retrieved and visually inspected 25 August 2026. SHA-256: <code>${esc(data.handbook.sha256)}</code>.</p></section>
      <div class="notice teacher"><strong>${esc(data.syllabusConflict.status)} - syllabus conflict</strong>${esc(data.syllabusConflict.statement)} ${esc(data.syllabusConflict.doNotDo)}</div>
      <section class="assessment-notice-card"><div><p class="assessment-kicker">Party Task support</p><h3>${esc(data.notification.taskName)}</h3><p><strong>${esc(data.notification.label)}</strong></p><p>${esc(data.notification.summary)}</p></div><div><a class="button" href="${esc(data.notification.route)}">Open draft notification support</a><p>${esc(data.notification.formalStatus)}.</p></div></section>
      ${renderAssessmentProcessVisuals()}
      <section class="assessment-confirm"><h3>Authority and confirmation status</h3><p>Pending items remain visible so staff can reconcile them without students mistaking a draft claim for a current requirement.</p>${renderStatusGrid()}</section>
      <section class="assessment-policy"><h3>Official policy source</h3><p>Use the current cohort handbook for assessment policy. High-consequence absence, late, malpractice, appeal and adjustment rules are not paraphrased on this course page.</p><a href="${esc(data.handbookHub.url)}" target="_blank" rel="noopener">Open the WWHS Assessment Handbooks hub</a></section>`;
  }

  function acknowledgement() {
    try {
      const record = JSON.parse(localStorage.getItem(data.notification.acknowledgementKey) || "null");
      if (!record || record.version !== data.notification.version || record.courseId !== data.courseId) return null;
      return record;
    } catch (error) {
      return null;
    }
  }

  function renderNotification() {
    const slot = document.querySelector("[data-assessment-notification]");
    if (!slot) return;
    const note = data.notification;
    const record = acknowledgement();
    slot.innerHTML = `<section class="notification-identity"><span class="notification-status">${esc(note.label)}</span><p class="assessment-kicker">Year 8 Food Technology</p><h1>Party Task</h1><p class="notification-subtitle">Draft assessment support - not the issued formal notification</p></section>
      <section class="notification-facts" aria-label="Essential task information"><div><span>Task number</span><strong>${esc(note.taskNumber)}</strong></div><div><span>Issue</span><strong>${esc(note.issue)}</strong></div><div><span>Due</span><strong>${esc(note.due)}</strong></div><div><span>Weighting</span><strong>${esc(note.weighting)}</strong></div><div><span>Outcomes</span><strong>${esc(note.outcomes)}</strong></div><div><span>Practical product</span><strong>${esc(note.practicalProduct)}</strong></div></section>
      <div class="notice teacher"><strong>Do not rely on this page for dates, weighting or submission</strong>The controlling 2026 handbook and teacher-posted Party Task notice do not reconcile. A school-approved, 2025-syllabus notification must be reissued before this becomes a current formal task notice.</div>
      <section class="notification-section"><h2>Draft student-facing summary</h2><p>${esc(note.summary)}</p></section>
      <section class="notification-section"><h2>Confirmed evidence intentions</h2><p>These components are supported by the teacher source pack. Their formal marks, criteria and submission arrangement remain Teacher to confirm.</p><ul>${note.evidence.map((item) => `<li>${esc(item)}</li>`).join("")}</ul><p><a href="folio.html">Open the Party Task working folio</a></p></section>
      <section class="notification-section"><h2>Assessment criteria and submission</h2><div class="notification-two"><div class="notice teacher"><strong>Marking criteria - Teacher to confirm</strong>The historical source checklist and mark allocation have not been confirmed as the current criteria under the requested 2025 syllabus.</div><div class="notice teacher"><strong>Submission - Teacher to confirm</strong>No controlling current source confirms the submission method, practical product or final evidence package.</div></div></section>
      <section class="notification-section"><h2>Authority status</h2>${renderStatusGrid()}</section>
      <section class="notification-section"><h2>Excluded from this public draft</h2><ul>${note.excluded.map((item) => `<li>${esc(item)}</li>`).join("")}</ul><p class="assessment-source-note">The exact conflicting legacy claims are retained in the teacher-facing assessment manifest for reconciliation; they are not repeated here as student directions.</p></section>
      <section class="notification-ack" aria-labelledby="ack-title"><h2 id="ack-title">Draft-page read acknowledgement</h2><label><input id="notification-read-check" type="checkbox"${record ? " checked" : ""}> <span>${esc(note.acknowledgementLabel)}</span></label><p id="notification-read-status" role="status">${record ? `Saved in this browser on ${esc(formatDate(record.readAt))} for version ${esc(record.version)}.` : "No acknowledgement is stored for this version on this device."}</p><p>${esc(note.acknowledgementBoundary)}</p><button type="button" class="assessment-quiet" id="notification-read-reset">Clear local acknowledgement</button></section>
      <section class="notification-source"><h2>Version and sources</h2><p><strong>Notification version:</strong> ${esc(note.version)}<br><strong>Status:</strong> ${esc(note.formalStatus)}<br><strong>Verified:</strong> 25 August 2026</p><p><a href="${esc(data.handbook.source_url)}" target="_blank" rel="noopener">2026 Year 8 Assessment Handbook</a> · <a href="${esc(data.handbookHub.url)}" target="_blank" rel="noopener">WWHS Assessment Handbooks hub</a> · <a href="assessment.html">Return to assessment schedule</a></p></section>`;
    bindAcknowledgement();
  }

  function formatDate(value) {
    try {
      return new Date(value).toLocaleString("en-AU", { dateStyle: "long", timeStyle: "short" });
    } catch (error) {
      return String(value || "");
    }
  }

  function bindAcknowledgement() {
    const checkbox = document.getElementById("notification-read-check");
    const reset = document.getElementById("notification-read-reset");
    const status = document.getElementById("notification-read-status");
    if (!checkbox || !reset || !status) return;
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        const record = { courseId: data.courseId, notificationId: data.notification.id, version: data.notification.version, readAt: new Date().toISOString(), boundary: "browser-local draft-page read acknowledgement only" };
        try {
          localStorage.setItem(data.notification.acknowledgementKey, JSON.stringify(record));
          status.textContent = `Saved in this browser on ${formatDate(record.readAt)} for version ${record.version}.`;
        } catch (error) {
          checkbox.checked = false;
          status.textContent = "This browser could not save the acknowledgement.";
        }
      } else {
        try {
          localStorage.removeItem(data.notification.acknowledgementKey);
          status.textContent = "No acknowledgement is stored for this version on this device.";
        } catch (error) {
          checkbox.checked = true;
          status.textContent = "This browser could not clear the local acknowledgement.";
        }
      }
    });
    reset.addEventListener("click", () => {
      try {
        localStorage.removeItem(data.notification.acknowledgementKey);
        checkbox.checked = false;
        status.textContent = "Local acknowledgement cleared. Official task requirements are unchanged.";
      } catch (error) {
        status.textContent = "This browser could not clear the local acknowledgement.";
      }
    });
  }

  function injectStyles() {
    if (document.getElementById("assessment-owned-styles")) return;
    const style = document.createElement("style");
    style.id = "assessment-owned-styles";
    style.textContent = `
      .assessment-landing{margin-top:3rem}.assessment-orientation{max-width:86ch}.assessment-schedule,.assessment-confirm,.assessment-policy,.assessment-notice-card,.assessment-process-visuals{margin-top:1.2rem;padding:1.2rem;background:#fff;border:1px solid var(--line);border-radius:var(--radius-md);box-shadow:0 7px 22px rgba(35,60,45,.07)}.assessment-heading,.assessment-notice-card{display:flex;gap:1rem;align-items:start;justify-content:space-between}.assessment-kicker{margin:0;color:var(--muted);font-size:.8rem;font-weight:850;letter-spacing:.05em;text-transform:uppercase}.assessment-heading h3,.assessment-notice-card h3{margin:.25rem 0;font-size:1.55rem}.assessment-table-wrap{overflow-x:auto;margin-top:1rem}.assessment-table{width:100%;min-width:790px;border-collapse:collapse}.assessment-table caption{text-align:left;padding:0 0 .6rem;font-weight:800}.assessment-table th,.assessment-table td{padding:.72rem;border:1px solid #aebdaf;text-align:left;vertical-align:top}.assessment-table thead th{color:#fff;background:var(--leaf-900)}.assessment-table tbody tr:nth-child(even){background:#f5f9f6}.assessment-table tfoot{font-weight:800;background:#fff8e7}.assessment-source-note{overflow-wrap:anywhere;color:var(--muted);font-size:.86rem}.assessment-status-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem}.assessment-status{display:grid;gap:.25rem;padding:.8rem;border:1px solid var(--line);border-left:6px solid var(--berry);border-radius:10px;background:#fff8fb}.assessment-status.is-confirmed{border-left-color:var(--leaf-500);background:#f3faf5}.assessment-status p{margin:0;font-size:.82rem;font-weight:800}.assessment-status strong{color:var(--berry)}.assessment-status.is-confirmed strong{color:var(--leaf-700)}.assessment-status span{color:var(--muted);font-size:.9rem}.assessment-policy{max-width:86ch}
      .assessment-process-intro{max-width:82ch}.assessment-process-intro h3{margin:.2rem 0;font-size:1.55rem}.assessment-process-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;margin-top:1rem}.assessment-process-visual{display:flex;min-width:0;flex-direction:column;padding:1rem;border:1px solid var(--line);border-radius:12px;background:#f9fbf9}.assessment-process-visual h4{margin:.2rem 0;font-size:1.25rem}.assessment-process-visual figure{margin:.5rem 0}.assessment-process-visual img{display:block;width:100%;height:auto;border:1px solid var(--line);border-radius:10px;background:#fff}.assessment-process-visual figcaption{margin-top:.45rem;color:var(--muted);font-size:.88rem}.assessment-process-notice{margin:.45rem 0;padding:.7rem;border-left:5px solid var(--mustard);background:#fffaf0}.assessment-process-open{align-self:flex-start;min-height:44px;margin-top:auto;padding:.6rem 0;font-weight:800}
      [data-assessment-notification]{display:block}.notification-identity{padding:clamp(1.4rem,4vw,2.8rem);color:#fff;background:linear-gradient(135deg,var(--leaf-900),var(--leaf-700));border-radius:var(--radius-lg);box-shadow:var(--shadow)}.notification-identity h1{max-width:none;font-size:clamp(2.4rem,7vw,4.7rem)}.notification-status{display:inline-block;padding:.35rem .65rem;border-radius:999px;background:#f8dc91;color:var(--leaf-900);font-weight:850}.notification-subtitle{color:#e5f2e9}.notification-facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.75rem;margin:1.2rem 0}.notification-facts div{padding:.8rem;border:1px solid var(--line);border-radius:11px;background:#fff}.notification-facts span{display:block;color:var(--muted);font-size:.78rem;font-weight:800;text-transform:uppercase}.notification-facts strong{display:block;margin-top:.2rem}.notification-section,.notification-ack,.notification-source{margin-top:1.2rem;padding:1.2rem;background:#fff;border:1px solid var(--line);border-radius:var(--radius-md)}.notification-section h2,.notification-ack h2,.notification-source h2{font-size:1.55rem}.notification-two{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}.notification-two .notice{margin:0}.assessment-source-review{margin-top:1rem;border-top:1px solid var(--line);padding-top:.7rem}.assessment-source-review summary{cursor:pointer;color:var(--leaf-700);font-weight:800}.assessment-source-review dl>div{display:grid;grid-template-columns:180px 1fr;gap:.7rem;padding:.45rem 0;border-bottom:1px solid var(--line)}.assessment-source-review dt{font-weight:800;text-transform:capitalize}.assessment-source-review dd{margin:0}.notification-ack{border-left:7px solid var(--mustard)}.notification-ack label{display:flex;gap:.65rem;align-items:flex-start;padding:.7rem;border:1px solid var(--line);border-radius:10px;background:#fffaf0;font-weight:800}.notification-ack input{width:1.25rem;height:1.25rem;margin-top:.15rem}.notification-ack p{color:var(--muted)}.assessment-quiet{min-height:44px;padding:.55rem .75rem;border:1px solid #89a494;border-radius:9px;background:#fff;color:var(--leaf-900);font:inherit;font-weight:750;cursor:pointer}
      @media(max-width:760px){.assessment-heading,.assessment-notice-card{display:block}.assessment-notice-card>div+div{margin-top:1rem}.assessment-process-grid,.assessment-status-grid,.notification-facts,.notification-two{grid-template-columns:1fr}.assessment-source-review dl>div{grid-template-columns:1fr;gap:0}.assessment-table{min-width:0}.assessment-table thead{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.assessment-table,.assessment-table tbody,.assessment-table tr,.assessment-table th,.assessment-table td{display:block}.assessment-table tr{margin:.8rem 0;border:1px solid #aebdaf;border-radius:10px;overflow:hidden}.assessment-table th,.assessment-table td{display:grid;grid-template-columns:95px 1fr;gap:.55rem;border:0;border-bottom:1px solid var(--line)}.assessment-table th::before,.assessment-table td::before{content:attr(data-label);font-weight:850}.assessment-table tfoot{display:block}.assessment-table tfoot tr{display:grid}.assessment-table tfoot th,.assessment-table tfoot td{display:block}.assessment-table tfoot th::before,.assessment-table tfoot td::before{content:none}}
      @media print{.assessment-process-open,.assessment-notice-card .button,.notification-ack,.assessment-source-review summary,.assessment-policy{display:none!important}.assessment-process-visuals,.assessment-process-visual,.assessment-schedule,.assessment-confirm,.assessment-notice-card,.notification-section,.notification-source{box-shadow:none;break-inside:avoid}.assessment-table-wrap{overflow:visible}.assessment-table{min-width:0;font-size:9.5pt}.notification-identity{color:#000;background:#fff;box-shadow:none;border:1px solid #000}.notification-subtitle{color:#000}.notification-facts{grid-template-columns:repeat(3,1fr)}}
    `;
    document.head.appendChild(style);
  }

  function init() {
    injectStyles();
    renderLanding();
    renderNotification();
  }

  window.FoodTechAssessment = Object.freeze({ renderLanding, renderNotification, data });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
