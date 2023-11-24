import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    font-size: 100%;
    margin: 0;
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

;`;

export default GlobalStyle;
