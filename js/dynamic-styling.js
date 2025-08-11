const navbar = document.querySelector(".navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

function isMobileViewport() {
  return window.matchMedia("(max-width: 992px) and (pointer: coarse)").matches;
}

function isLandscape() {
  return window.matchMedia("(orientation: landscape)").matches;
}

function setDynamicPadding() {
  const header = document.querySelector("header");

  if (isMobileViewport() && isLandscape()) {
    header.style.paddingTop = `${navbarHeight}px`;
    header.style.paddingBottom = `${navbarHeight}px`;
  } else {
    header.style.paddingTop = "0px";
    header.style.paddingBottom = "0px";
  }
}

function navbarScrollStyling() {
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
}

window.addEventListener("DOMContentLoaded", setDynamicPadding);
window.addEventListener("resize", setDynamicPadding);
window.addEventListener("orientationchange", setDynamicPadding);
window.addEventListener("scroll", navbarScrollStyling);
