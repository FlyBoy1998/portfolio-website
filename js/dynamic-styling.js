const navbar = document.querySelector(".navbar");
const headerTextContent = document.querySelector(".text-content");

function isMobileViewport() {
  return window.matchMedia("(max-width: 992px) and (pointer: coarse)").matches;
}

function setDynamicMargin() {
  const navbarHeight = navbar.getBoundingClientRect().height;
  if (
    isMobileViewport() &&
    window.matchMedia("(orientation: landscape)").matches
  ) {
    headerTextContent.style.marginTop = `${navbarHeight}px`;
  } else {
    headerTextContent.style.marginTop = "0px";
  }
}

window.addEventListener("DOMContentLoaded", setDynamicMargin);
window.addEventListener("resize", setDynamicMargin);
window.addEventListener("orientationchange", setDynamicMargin);
