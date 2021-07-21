import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    --color-cian:   #34ebeb;
    --color-violet: #4034eb;
    /* --color-pink:#d034eb; */
    --color-orange: #f27500;
    --color-green:  #26ad00;
    /* --color-red: #ad0000; */
    --color-hlink:  #5a81c4;
    --color-hlight: #839ecc;
    --color-black:  #000000;
    --color-bg:     #272633;


    --panel-shadow: 10px 10px 3px 0 rgba(200,200,200,.3);

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background-color: var(--color-bg);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
}
`;
