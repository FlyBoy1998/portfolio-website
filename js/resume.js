const resumeHeading = document.querySelector(".resume-heading");
const resumeSubtextHighlight = document.querySelector(
  ".resume-subtext__highlight"
);

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
