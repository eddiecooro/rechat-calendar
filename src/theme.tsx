import React from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import {
  default as MuiThemeProvider,
  ThemeProviderProps
} from '@material-ui/styles/ThemeProvider';

let theme = createMuiTheme({
  typography: {
    fontFamily: 'Barlow, Georgia, Times New Roman, Times, serif'
  }
});
theme = responsiveFontSizes(theme);

export const ThemeProvider: React.FC<
  Omit<ThemeProviderProps, 'theme'>
> = props => <MuiThemeProvider theme={theme} {...props}></MuiThemeProvider>;
