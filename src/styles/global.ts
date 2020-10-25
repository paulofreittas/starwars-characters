import { createGlobalStyle } from 'styled-components';

import swBackground from '../assets/background-img.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: url(${swBackground}) top center #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
