import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 body {
    margin: 0;
    font-family: "Open Sans", system-ui;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
    background-color: #2F2E41;
  }
`;