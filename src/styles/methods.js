import { css } from 'styled-components';

export const breakpoints = {
  laptop: 1024,
  tablet: 768,
  mobile: 425,
};

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}px) {
        ${css(...args)}
      }
    `;

  return acc;
}, {});
