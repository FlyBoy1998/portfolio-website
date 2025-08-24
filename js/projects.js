import projectsData from "./projects-resource.js";

const sliderContainer = document.querySelector(".slider");

function renderProjectsMarkup() {
  sliderContainer.innerHTML = "";

  const markup = projectsData
    .map((project) => {
      return `
      <div class="project d-flex flex-column" data-project-id="${project.id}">
        <div class="project__image">
          <img
            src="./assets/images/${project.image}"
            class="w-100"
            alt=""
          />
        </div>
        <div class="project__details">
          <h2 class="project__details--title text-center mb-3">
            ${project.title}
          </h2>
          <p class="project__details--description text-center mb-5">
            ${project.excerpt}
          </p>
          <div class="project__details--cta d-flex">
            <a class="project__details--cta--live-version" href="${project.links.liveVersion}" aria-label="Live Version Link" target="_blank" rel="noopener"
              ><i class="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
            <a class="project__details--cta--source-code" href="${project.links.sourceCode}" aria-label="Source Code Link" target="_blank" rel="noopener">
              <i class="fa-brands fa-github"></i>
            </a>
            <button class="project__details--cta--info" data-bs-toggle="modal" data-bs-target="#project-details-modal">
              <i class="fa-solid fa-circle-info"></i>
            </button>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  sliderContainer.insertAdjacentHTML("afterbegin", markup);
}

renderProjectsMarkup();
