const projects = document.querySelectorAll(".project");
const prevBtn = document.querySelector(".slider-button.prev");
const nextBtn = document.querySelector(".slider-button.next");

let active = 0;

function loadShow() {
  let stt = 0;

  projects[active].style.transform = `none`;
  projects[active].style.zIndex = 1;
  projects[active].style.filter = "none";
  projects[active].style.opacity = 1;

  for (let i = active + 1; i < projects.length; i++) {
    stt++;
    projects[i].style.transform = `translateX(${140 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(2rem) rotateY(-1deg)`;
    projects[i].style.zIndex = -stt;
    projects[i].style.filter = "blur(0.5rem)";
    projects[i].style.opacity = stt > 2 ? 0 : 0.8;
  }

  stt = 0;

  for (let i = active - 1; i >= 0; i--) {
    stt++;
    projects[i].style.transform = `translateX(${-140 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(2rem) rotateY(1deg)`;
    projects[i].style.zIndex = -stt;
    projects[i].style.filter = "blur(0.5rem)";
    projects[i].style.opacity = stt > 2 ? 0 : 0.8;
  }
}

function next() {
  active = active + 1 < projects.length ? active + 1 : active;
  loadShow();
}

function prev() {
  active = active - 1 >= 0 ? active - 1 : active;
  loadShow();
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

loadShow();
