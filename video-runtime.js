(function () {
  "use strict";

  const catalogue = window.FOOD_TECH_VIDEOS;
  if (!catalogue) {
    console.error("Video data is unavailable.");
    return;
  }

  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const coursePath = (path) => {
    const root = document.body.dataset.courseRoot || ".";
    return root === "." ? path : `${root.replace(/\/$/, "")}/${path}`;
  };

  const closePlayer = (shell, restoreFocus = true) => {
    if (!shell || !shell.isConnected) return;
    const media = shell.closest("[data-video-media]");
    const launcher = media?.querySelector("[data-video-launch]");
    shell.remove();
    if (launcher) {
      launcher.hidden = false;
      if (restoreFocus) launcher.focus();
    }
  };

  const closeOtherPlayers = () => {
    document.querySelectorAll("[data-video-player]").forEach((shell) => closePlayer(shell, false));
  };

  const openPlayer = (media, launcher, video) => {
    closeOtherPlayers();
    launcher.hidden = true;

    const shell = element("div", "video-player-shell");
    shell.dataset.videoPlayer = video.videoId;

    const controls = element("div", "video-player-controls");
    const close = element("button", "video-close", "Close / stop");
    close.type = "button";
    close.setAttribute("aria-label", `Stop and close ${video.title}`);
    close.addEventListener("click", () => closePlayer(shell));
    controls.appendChild(close);

    const frame = document.createElement("iframe");
    frame.src = `https://www.youtube-nocookie.com/embed/${video.videoId}`;
    frame.title = `${video.title} — YouTube video`;
    frame.loading = "eager";
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.allow = "encrypted-media; picture-in-picture; web-share";
    frame.allowFullscreen = true;

    shell.append(controls, frame);
    media.appendChild(shell);
    close.focus();
  };

  const createMedia = (video) => {
    const media = element("div", "video-media");
    media.dataset.videoMedia = video.videoId;

    const launch = element("button", "video-launch");
    launch.type = "button";
    launch.dataset.videoLaunch = video.videoId;
    launch.setAttribute("aria-label", `Load video: ${video.title}`);

    const image = document.createElement("img");
    image.src = video.thumbnail;
    image.alt = `${video.title} video thumbnail`;
    image.loading = "lazy";
    image.width = 320;
    image.height = 180;

    const play = element("span", "video-play", "▶");
    play.setAttribute("aria-hidden", "true");
    const label = element("span", "video-launch-label", "Load video");
    launch.append(image, play, label);
    launch.addEventListener("click", () => openPlayer(media, launch, video));
    media.appendChild(launch);
    return media;
  };

  const createLink = (label, href, className, external = false) => {
    const link = element("a", className, label);
    link.href = href;
    if (external) {
      link.target = "_blank";
      link.rel = "noopener";
    }
    return link;
  };

  const createVideoCard = (video, compact = false) => {
    const card = element("article", compact ? "video-card video-card-compact" : "video-card");
    card.id = compact ? `section-video-${video.sectionId}` : `library-video-${video.sectionId}`;
    const titleId = `${card.id}-title`;
    card.setAttribute("aria-labelledby", titleId);

    card.appendChild(createMedia(video));
    const body = element("div", "video-card-body");
    const sectionLabel = element("p", "video-kicker", `Module ${String(video.module).padStart(2, "0")} · Section ${video.section}`);
    const title = element("h3", "video-title", video.title);
    title.id = titleId;
    const meta = element("p", "video-meta", `${video.channel} · ${video.duration}`);
    const purpose = element("p", "video-purpose", video.purpose);
    const prompt = element("p", "video-watch-for");
    prompt.append(element("strong", "", "Watch for: "), document.createTextNode(video.watchFor));
    const sample = element("p", "video-sample", `Useful segment: ${video.sampledSegment}`);
    const alternative = element("details", "video-alternative");
    const summary = element("summary", "", "No video? Use this equivalent path");
    alternative.append(summary, element("p", "", video.alternative));

    const links = element("div", "video-links");
    links.append(
      createLink("Open theory section", coursePath(video.theoryLink), "video-theory-link"),
      createLink("Open in YouTube ↗", video.url, "video-youtube-link", true)
    );

    body.append(sectionLabel, title, meta, purpose, prompt, sample, alternative, links);
    card.appendChild(body);
    return card;
  };

  const renderLibrary = (mount) => {
    mount.replaceChildren();
    const modules = [...new Set(catalogue.videos.map((video) => video.module))];
    modules.forEach((moduleNumber) => {
      const videos = catalogue.videos.filter((video) => video.module === moduleNumber);
      const group = element("section", "video-module-group");
      const heading = element("div", "video-module-heading");
      const title = element("h2", "", `Module ${String(moduleNumber).padStart(2, "0")} · ${videos[0].moduleTitle}`);
      title.id = `video-module-${moduleNumber}`;
      const note = element("p", "", "Three section-matched videos. Choose play only when streaming is useful.");
      heading.append(title, note);
      const grid = element("div", "video-grid");
      videos.forEach((video) => grid.appendChild(createVideoCard(video)));
      group.setAttribute("aria-labelledby", title.id);
      group.append(heading, grid);
      mount.appendChild(group);
    });
  };

  document.querySelectorAll("[data-video-library]").forEach(renderLibrary);
  document.querySelectorAll("[data-section-video]").forEach((mount) => {
    const video = catalogue.bySection[mount.dataset.sectionVideo];
    if (video) mount.replaceChildren(createVideoCard(video, true));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const openPlayers = [...document.querySelectorAll("[data-video-player]")];
    const latest = openPlayers.at(-1);
    if (latest) {
      event.preventDefault();
      closePlayer(latest);
    }
  });

  window.FOOD_TECH_VIDEO_RUNTIME = Object.freeze({
    createVideoCard,
    renderLibrary
  });
})();
