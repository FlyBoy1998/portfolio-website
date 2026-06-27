function renderProjectCtaMarkup(liveVersion, sourceCode) {
  const markup = `
    
    <div class="project__details--cta d-flex">
            <a class="project__details--cta--live-version" href="${liveVersion}" aria-label="Open live project" target="_blank" rel="noopener noreferrer"
              ><i class="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
            <a class="project__details--cta--source-code" href="${sourceCode}" aria-label="View source code on GitHub" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-github"></i>
            </a>
            <button type="button" class="project__details--cta--info" aria-label="Project Details Button">
              <i class="fa-solid fa-circle-info"></i>
            </button>
    </div>
    `;

  return markup;
}

export { renderProjectCtaMarkup };
