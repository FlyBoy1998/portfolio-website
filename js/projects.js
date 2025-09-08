import projectsData from "./projects-data.js";
import renderPerformancesChart from "./chart.js";

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
            alt="${project.title} Image"
          />
        </div>
        <div class="project__details">
          <h2 class="project__details--title text-center mb-3">
            ${project.title}
          </h2>
          <p class="project__details--description text-center mb-4">
            ${project.excerpt}
          </p>
          <div class="project__details--cta d-flex">
            <a class="project__details--cta--live-version" href="${project.links.liveVersion}" aria-label="Live Version Link" target="_blank" rel="noopener"
              ><i class="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
            <a class="project__details--cta--source-code" href="${project.links.sourceCode}" aria-label="Source Code Link" target="_blank" rel="noopener">
              <i class="fa-brands fa-github"></i>
            </a>
            <button class="project__details--cta--info" aria-label="Project Details Button">
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

function renderTechnologiesMarkup(technologies) {
  const markup = technologies
    .map((technology) => {
      return `
      <div class="d-flex flex-column align-items-center">
        <img src="./assets/images/${technology.technologyIcon}" class="w-100" alt="${technology.technologyName} Icon">
        <p class="text-center m-0">${technology.technologyName}</p>
      </div>
    `;
    })
    .join("");

  return markup;
}

function renderProjectDetailsModalMarkup() {
  const projectDetailsModal = new bootstrap.Modal(
    document.getElementById("project-details-modal")
  );
  const projectDetailsModalContent = document.querySelector(".modal-content");

  sliderContainer.addEventListener("click", (e) => {
    if (e.target.closest(".project__details--cta--info")) {
      projectDetailsModalContent.innerHTML = "";

      const projectDetailsBtn = e.target;
      const projectId =
        +projectDetailsBtn.closest("[data-project-id]").dataset.projectId;
      const projectDisplayed = projectsData[projectId - 1];

      const markup = `
        <div class="modal-header">
            <h1 class="modal-title display-6" id="project-details-modal-label">
              ${projectDisplayed.title}
            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close modal"></button>
          </div>
          <div class="modal-body project-modal">
            <section class="project-modal__details">
              <h2 class="project-modal__details--title">Details</h2>
              <p class="project-modal__details--description m-0">
                ${projectDisplayed.description}
              </p>
            </section>
            <section class="project-modal__technologies">
              <h2 class="project-modal__technologies--title">
                Technologies Used
              </h2>
              <div class="project-modal__technologies--icons d-flex flex-wrap">
                ${renderTechnologiesMarkup(projectDisplayed.technologies)}
              </div>
            </section>
            <section class="project-modal__mockups">
              <h2>Multi Device Mockups</h2>
              <img src="./assets/images/${
                projectDisplayed.mockups
              }" class="object-fit-cover" alt="${
        projectDisplayed.title
      } multi device mockups">
            </section>
            <section class="project-modal__performances">
              <h2>Lighthouse Audit Summary</h2>
              <canvas id="performances-chart"></canvas>
            </section>
            <section class="project-modal__cta-links d-flex flex-column flex-sm-row">
              <a href="${
                projectDisplayed.links.liveVersion
              }" class="project-modal__cta-links--live-version text-center" target="_blank" rel="noopener">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Version
              </a>
              <a href="${
                projectDisplayed.links.sourceCode
              }" class="project-modal__cta-links--source-code text-center" target="_blank" rel="noopener">
                <i class="fa-brands fa-github"></i> Source Code
              </a>
            </section>
          </div>
      `;

      projectDetailsModalContent.insertAdjacentHTML("afterbegin", markup);
      renderPerformancesChart(projectDisplayed);
      projectDetailsModal.show();
    }
  });
}

renderProjectDetailsModalMarkup();
renderProjectsMarkup();
