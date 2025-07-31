const hamburgerBtn = document.getElementById("hamburger-btn");
const offScreenNav = document.getElementById("off-screen-nav");

function toggleOffScreenNav() {
  const isExpanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
  hamburgerBtn.setAttribute("aria-expanded", !isExpanded);

  offScreenNav.classList.toggle("active");
}

hamburgerBtn.addEventListener("click", toggleOffScreenNav);
