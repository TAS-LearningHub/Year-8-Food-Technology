(() => {
  "use strict";

  const programMount = document.getElementById("programDownload");
  const deckMount = document.getElementById("presentationDownloads");
  const program = window.FOOD_TECH_PROGRAM;
  const decks = Array.isArray(window.FOOD_TECH_PRESENTATIONS) ? window.FOOD_TECH_PRESENTATIONS : [];

  if (programMount) {
    programMount.replaceChildren();
    const heading = document.createElement("strong");
    const copy = document.createElement("p");
    heading.textContent = program?.available ? "Backward-mapped teacher program" : "Program control active";
    copy.textContent = program?.available
      ? `${program.scope} · ${program.syllabus} · ${program.format}`
      : (program?.status || "The program is not available because its course-control record did not load.");
    programMount.append(heading, copy);
    if (program?.available && program.file) {
      const link = document.createElement("a");
      link.className = "button";
      link.href = program.file;
      link.textContent = "Download editable teacher program";
      link.setAttribute("download", "");
      programMount.append(link);
    }
    if (program?.available && program.deliveryRegister) {
      const registerLink = document.createElement("a");
      registerLink.className = "button";
      registerLink.href = program.deliveryRegister;
      registerLink.textContent = "Download delivery confirmation register";
      registerLink.setAttribute("download", "");
      programMount.append(registerLink);
    }
  }

  if (deckMount) {
    deckMount.replaceChildren();
    decks.forEach((deck) => {
      const article = document.createElement("article");
      article.className = "module-card";
      const number = document.createElement("span");
      number.className = "module-number";
      number.textContent = `Module ${String(deck.moduleId).padStart(2, "0")}`;
      const title = document.createElement("h3");
      title.textContent = deck.title;
      const description = document.createElement("p");
      description.textContent = `${deck.slideCount} editable slides · ${deck.theorySections.length} named theory sections · teacher notes included`;
      const link = document.createElement("a");
      link.href = deck.file;
      link.textContent = "Download PowerPoint";
      link.setAttribute("download", "");
      article.append(number, title, description, link);
      deckMount.append(article);
    });
    if (decks.length !== 10) {
      const warning = document.createElement("p");
      warning.className = "notice teacher";
      warning.textContent = "Presentation downloads are unavailable because the verified ten-deck manifest did not load completely.";
      deckMount.replaceChildren(warning);
    }
  }
})();
