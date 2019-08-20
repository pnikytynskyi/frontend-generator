import { injectGlobal } from 'styled-components';
import { fontFamily } from './fonts';

import { form } from './elements';

injectGlobal`
  body {
    background-color: #fafafa;
    font-size: 1.7rem;
    min-height: 100vh;
    margin: 0;
    overflow: hidden;
  }
  html {
    font-size: 62.5%;
  }
  #app {
    min-height: inherit;
    display: flex;

    & > * {
      flex: 1 0 100%;
    }
  }
  p {
    font-family: 'content';
    margin-bottom: 3rem;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    font-family: 'subtitle';
  }

  i {
    color: #1a1a1a;
    font-family: 'condensed';
    text-transform: none;
    font-style: normal;
    font-size: 1.4rem;
  }
  ${form}
  ${fontFamily}
`;
