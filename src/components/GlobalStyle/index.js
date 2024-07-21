import { createGlobalStyle } from "styled-components";
import bgImage from "../../assets/bg.png";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-color: #020207;
  background-image: url(${bgImage});
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
}

img,
svg {
  display: block;
  max-width: 100%;
}

input {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

  @media(min-width: 426px){
    html{
    display:flex;
    justify-content: center;
    align-items: center;
    }
  }
`;
