const navbar = document.querySelector(".navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const sections = document.querySelectorAll(".section");

function isMobileViewport() {
  return window.matchMedia("(max-width: 992px) and (pointer: coarse)").matches;
}

function isLandscape() {
  return window.matchMedia("(orientation: landscape)").matches;
}

function setHeaderPadding() {
  const header = document.querySelector("header");

  if (isMobileViewport() && isLandscape()) {
    header.style.paddingTop = `${navbarHeight}px`;
    header.style.paddingBottom = `${navbarHeight}px`;
  } else {
    header.style.paddingTop = "0px";
    header.style.paddingBottom = "0px";
  }
}

function setSectionsHeight() {
  sections.forEach(
    (section) => (section.style.minHeight = `calc(100vh - ${navbarHeight}px)`),
  );
}

function navbarScrollStyling() {
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
    document.documentElement.style.scrollPaddingTop = `${navbarHeight}px`;
  } else {
    navbar.classList.remove("navbar-scroll");
    document.documentElement.style.scrollPaddingTop = 0;
  }
}

["DOMContentLoaded", "resize", "orientationchange"].forEach((event) =>
  window.addEventListener(event, setHeaderPadding),
);
window.addEventListener("scroll", navbarScrollStyling);
setSectionsHeight();
