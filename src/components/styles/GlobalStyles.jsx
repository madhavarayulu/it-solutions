import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  
  body{
    background-color: ${(porps) => porps.theme.colors.bgDefault};
    *{
      font-family: 'Roboto', sans-serif;
    }
  }
`;
