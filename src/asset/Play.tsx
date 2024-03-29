import React from 'react';

function Icon() {
  return (
    <svg viewBox="0 0 40 40" fill="currentColor" width="40" height="40">
      <defs>
        <path
          d="M20,37.8378378 C29.8515658,37.8378378 37.8378378,29.8515658 37.8378378,20 C37.8378378,10.1484342 29.8515658,2.16216216 20,2.16216216 C10.1484342,2.16216216 2.16216216,10.1484342 2.16216216,20 C2.16216216,29.8515658 10.1484342,37.8378378 20,37.8378378 Z M20,40 C8.954305,40 0,31.045695 0,20 C0,8.954305 8.954305,0 20,0 C31.045695,0 40,8.954305 40,20 C40,31.045695 31.045695,40 20,40 Z M26.594595,19.6756755 L15.1351351,12.972973 L15.1351351,26.378378 L26.594595,19.6756755 Z"
          id="path-play"
        />
      </defs>
      <g
        id="play-button"
        stroke="none"
        fill="none"
        stroke-width="1"
        fill-rule="evenodd"
      >
        <g id="Awesome-Icons---slider-+-grid" transform="translate(-768 -876)">
          <g id="Icons/play" transform="translate(768 876)">
            <g id="play">
              <mask id="mask-play" fill="currentColor">
                <use href="#path-play" />
              </mask>
              <use
                id="Mask"
                fill="currentColor"
                fill-rule="nonzero"
                href="#path-play"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Icon;
