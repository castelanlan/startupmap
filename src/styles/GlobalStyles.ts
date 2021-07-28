import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    --color-violet: #4034eb;
    --color-green:  #2bff2b;
    --color-hlink:  #5a81c4;
    --color-hlight: #839ecc;
    --color-black:  #000000;
    --color-bg:     #14131a;
    --panel-shadow: 5px 5px 3px 0 rgba(0,0,0,.3);

  * {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }

  html {
    min-height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
}
`;
