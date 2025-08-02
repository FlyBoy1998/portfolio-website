const navbar = document.querySelector(".navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

function isMobileViewport() {
  return window.matchMedia("(max-width: 992px) and (pointer: coarse)").matches;
}

function setDynamicMargin() {
  const headerTextContent = document.querySelector(".text-content");

  if (
    isMobileViewport() &&
    window.matchMedia("(orientation: landscape)").matches
  ) {
    headerTextContent.style.marginTop = `${navbarHeight}px`;
  } else {
    headerTextContent.style.marginTop = "0px";
  }
}

function navbarScrollStyling() {
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
}

window.addEventListener("DOMContentLoaded", setDynamicMargin);
window.addEventListener("resize", setDynamicMargin);
window.addEventListener("orientationchange", setDynamicMargin);
window.addEventListener("scroll", navbarScrollStyling);
