import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 #root, html, body {
     box-sizing: border-box;
     margin: 0;
     padding: 0;

     width: 100%;
     height: 100%;

     display: flex;
     justify-content: center;
     flex-direction: column;
 }
`;

export default GlobalStyles;
