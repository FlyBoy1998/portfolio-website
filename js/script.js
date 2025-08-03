const hamburgerBtn = document.getElementById("hamburger-btn");
const offScreenNav = document.getElementById("off-screen-nav");
const offScreenNavCloseBtn = document.querySelector(
  ".off-screen-nav__close-btn"
);

function displayOffScreenNav() {
  hamburgerBtn.setAttribute("aria-expanded", true);
  offScreenNav.classList.add("active");
}

function hideOffScreenNav() {
  hamburgerBtn.setAttribute("aria-expanded", false);
  offScreenNav.classList.remove("active");
}

function setTippyProps(element, theme, content) {
  tippy(element, {
    content,
    placement: "bottom",
    animation: "shift-toward",
    theme,
  });
}

function setTippyTooltips() {
  const personalGitHubLink = document.querySelector(".cta-buttons__github");
  const studentGitHubLink = document.querySelector(
    ".cta-buttons__github-student"
  );

  setTippyProps(personalGitHubLink, "personal-profile", "Personal GitHub");
  setTippyProps(studentGitHubLink, "student-profile", "Student GitHub");
}

hamburgerBtn.addEventListener("click", displayOffScreenNav);
offScreenNavCloseBtn.addEventListener("click", hideOffScreenNav);
setTippyTooltips();
