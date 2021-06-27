import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  
* {
  font-size: 24px;
  font-family: "Arial";
  border: 0;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; 
}
  
html, body, #root {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: "Arial",serif;
    background-color: var(--secondary-color);
    --primary-color: #125E8A;
    --secondary-color: #88CCF1;
    --tertiary-color: #0F0326;
    --alt-color1: #B2ABF2;
    --alt-color2: #B5CA8D;
    --alt-color3: #73C2FB;
    
}
 
`;

export default GlobalStyle;