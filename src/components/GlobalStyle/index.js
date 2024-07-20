import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-color: #020207;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
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

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.7rem;
}

h3 {
  font-size: 1.5rem;
}

h4 {
  font-size: 1.25rem;
}

p {
  font-size: 1rem;
}

`;
