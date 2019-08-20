import LatoLight from 'src/assets/fonts/Lato-Light.ttf';

export const fontFamily = `
  @font-face {
    font-family: 'title';
    src: url(${LatoLight}) format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'subtitle';
    src: url(${LatoLight}) format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'content';
    src: url(${LatoLight}) format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'condensed';
    src: url(${LatoLight}) format('truetype');
  }
`;
