import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    --color-cian:   #34ebeb;
    --color-violet: #4034eb;
    /* --color-pink:#d034eb; */
    --color-orange: #f27500;
    --color-green:  #2bff2b;
    /* --color-red: #ad0000; */
    --color-hlink:  #5a81c4;
    --color-hlight: #839ecc;
    --color-black:  #000000;
    --color-bg:     #14131a;


    --panel-shadow: 10px 10px 3px 0 rgba(0,0,0,.3);

  * {
    margin: 0;
    box-sizing: border-box;
    background-color: var(--color-bg);
    color: white;
  }

  html {
    min-height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
}
`;
