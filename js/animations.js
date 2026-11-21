const waveContainer = document.querySelector(".wave-container");

function displayWaveMarkup() {
  const markup = `
        <svg class="wave-svg" viewBox="0 0 1440 360" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#ff8a00" stop-opacity="0" />
              <stop offset="25%" stop-color="#ff9d18" />
              <stop offset="55%" stop-color="#ffb52e" />
              <stop offset="80%" stop-color="#ff7600" />
              <stop offset="100%" stop-color="#ff8a00" stop-opacity="0" />
            </linearGradient>

            <pattern
              id="waveDots"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#ff9820" opacity=".8" />
            </pattern>

            <filter id="waveGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g class="mesh">
            <path
              d="M-100 170 C180 20 300 310 570 190
               S950 70 1160 190 S1400 280 1540 100
               L1540 360 L-100 360 Z"
              fill="url(#waveDots)"
              opacity=".45"
            />
          </g>

          <g class="wave wave-back">
            <path
              d="M-100 160 C180 30 300 300 580 180
               S960 70 1160 190 S1400 280 1540 100"
              fill="none"
              stroke="url(#waveGradient)"
              stroke-width="1.5"
              opacity=".35"
            />
          </g>

          <g class="wave wave-main" filter="url(#waveGlow)">
            <path
              d="M-100 200 C180 60 320 330 590 205
               S970 80 1170 205 S1400 300 1540 130"
              fill="none"
              stroke="url(#waveGradient)"
              stroke-width="2.5"
            />
          </g>

          <g class="wave wave-front">
            <path
              d="M-100 240 C200 100 340 350 610 230
               S980 120 1180 230 S1400 320 1540 170"
              fill="none"
              stroke="#ff8c00"
              stroke-width="1.2"
              opacity=".55"
            />
          </g>

          <path
            class="wave-line"
            d="M-100 190 C180 50 330 300 600 190
             S960 100 1180 210 S1400 290 1540 140"
            fill="none"
            stroke="#ffb52e"
            stroke-width="1"
            opacity=".7"
          />
        </svg>
    `;

  waveContainer.insertAdjacentHTML("afterbegin", markup);
}

displayWaveMarkup();
