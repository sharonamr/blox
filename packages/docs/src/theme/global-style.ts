import { createGlobalStyle } from 'styled-components';
import { bloxStylesOverrides } from "../blox-styles-overrides";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    font-size: 1rem;
    tab-size: 4;
    font-weight: normal;
    color: #4a5568;
    font-family: Rubik,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
    font-feature-settings: normal;
  }
  
  * {
    box-sizing: border-box;
  }
  
  ${bloxStylesOverrides}
`;

export default GlobalStyle;
