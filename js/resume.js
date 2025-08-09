const resumeHeading = document.querySelector(".resume-heading");
const resumeSubtextHighlight = document.querySelector(
  ".resume-subtext__highlight"
);
const tabButtons = document.querySelectorAll(".tab-buttons__button");
const tabContent = document.querySelectorAll(".tab-content__tab");
const scroller = document.querySelector(".scroller");

const typed = new Typed(resumeSubtextHighlight, {
  strings: [
    "dedicated worker.",
    "reliable teammate.",
    "focused problem-solver.",
    "detail-oriented developer.",
  ],
  startDelay: 1000,
  typeSpeed: 60,
  backSpeed: 25,
  backDelay: 1400,
  showCursor: true,
  loop: true,
  loopCount: Infinity,
});

function selectResumeTab() {
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonTab = button.dataset.buttonTab;

      tabButtons.forEach((tabBtn) => {
        tabBtn.classList.remove("active");
      });
      button.classList.add("active");

      tabContent.forEach((tab) => {
        tab.classList.remove("active");
        document.getElementById(buttonTab).classList.add("active");
      });
    });
  });
}

function addScrollAnimation() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!prefersReducedMotion) {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = document.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  }
}

selectResumeTab();
addScrollAnimation();
