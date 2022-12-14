import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import defaultTheme from './defaultTheme';
import GlobalStyle from './global-style';

export const ThemeProvider = ({ children, theme = defaultTheme }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </StyledThemeProvider>
  );
};
