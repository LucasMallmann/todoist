import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F2F2F2;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  /* #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  } */

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 0;
      margin: 0;
    }
  }
`;
