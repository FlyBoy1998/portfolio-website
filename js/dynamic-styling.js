const navbar = document.querySelector(".navbar");
const headerTextContent = document.querySelector(".text-content");

function setDynamicMargin() {
  const navbarHeight = navbar.getBoundingClientRect().height;
  if (
    window.matchMedia("(orientation: landscape)").matches &&
    window.innerWidth <= 768
  ) {
    headerTextContent.style.marginTop = `${navbarHeight}px`;
  } else {
    headerTextContent.style.marginTop = 0;
  }
}

window.addEventListener("resize", () => setDynamicMargin());
