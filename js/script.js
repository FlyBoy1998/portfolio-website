const hamburgerBtn = document.getElementById("hamburger-btn");
const offScreenNav = document.getElementById("off-screen-nav");

function displayOffScreenNav() {
  hamburgerBtn.setAttribute("aria-expanded", true);

  offScreenNav.classList.add("active");
}

hamburgerBtn.addEventListener("click", displayOffScreenNav);
