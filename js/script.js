const page = document.body.dataset.page;
const hamburgerBtn = document.getElementById("hamburger-btn");
const offScreenNav = document.getElementById("off-screen-nav");
const offScreenNavCloseBtn = document.querySelector(
  ".off-screen-nav__close-btn"
);
const offScreenNavLinks = document.querySelectorAll(
  ".off-screen-nav__links--link"
);
const scrollerInner = document.querySelector(".scroller__inner");

function addFadeLeftAnimation() {
  let animationDelay = 0.2;

  offScreenNavLinks.forEach((link) => {
    link.classList.add("fade-left");
    link.style.animation = `fadeLeft 0.6s ease-out ${animationDelay}s 1 normal forwards running`;
    animationDelay += 0.2;
  });
}

function removeFadeLeftAnimation() {
  offScreenNavLinks.forEach((link) => (link.style.animation = ""));
}

function displayOffScreenNav() {
  hamburgerBtn.setAttribute("aria-expanded", true);
  offScreenNav.classList.add("active");
  addFadeLeftAnimation();
}

function hideOffScreenNav() {
  hamburgerBtn.setAttribute("aria-expanded", false);
  offScreenNav.classList.remove("active");
  removeFadeLeftAnimation();
}

function runScroller() {
  scrollerInner.style.animationPlayState = "running";
}

function pauseScroller() {
  scrollerInner.style.animationPlayState = "paused";
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
  if (page === "homepage") {
    const personalGitHubLink = document.querySelector(".cta-buttons__github");
    const studentGitHubLink = document.querySelector(
      ".cta-buttons__github-student"
    );
    setTippyProps(personalGitHubLink, "primary", "Personal GitHub");
    setTippyProps(studentGitHubLink, "secondary", "Student GitHub");
  }

  if (page === "resume") {
    const skillsDetailsBtn = document.querySelector(
      ".scroller__skills-details-btn"
    );
    setTippyProps(skillsDetailsBtn, "secondary", "Skills Details");
  }
}

function setScrollerTippyTooltip() {
  if (page === "resume") {
    const tabContent = document.querySelector(".tab-content");
    tabContent.addEventListener("mouseover", (e) => {
      if (e.target.classList.contains("scroller__inner--icon")) {
        const targetEl = e.target;
        const techName = targetEl.dataset.techName;
        setTippyProps(targetEl, "secondary", techName);
        pauseScroller();
      }
    });
    tabContent.addEventListener("mouseleave", () => {
      runScroller();
    });
  }
}

hamburgerBtn.addEventListener("click", displayOffScreenNav);
offScreenNavCloseBtn.addEventListener("click", hideOffScreenNav);
setScrollerTippyTooltip();
setTippyTooltips();
