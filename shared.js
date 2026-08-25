(function () {
  "use strict";

  const config = window.FOOD_TECH_COURSE;
  if (!config) {
    console.error("Course configuration is unavailable.");
    return;
  }

  document.documentElement.dataset.courseId = config.id;
  document.documentElement.dataset.buildState = config.buildState;

  const currentPath = window.location.pathname.replace(/\\/g, "/");
  document.querySelectorAll("[data-nav-route]").forEach((link) => {
    const target = new URL(link.href, window.location.href).pathname.replace(/\\/g, "/");
    if (target === currentPath || (link.dataset.navRoute === "modules" && currentPath.includes("/modules/"))) {
      link.setAttribute("aria-current", "page");
    }
  });

  document.querySelectorAll("[data-course-title]").forEach((node) => {
    node.textContent = config.title;
  });

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
})();
