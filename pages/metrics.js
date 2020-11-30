import React from 'react';
import Dashboard from "../components/Dashboard"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Templates() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
				typography: {
    fontFamily: ['"Lato"', 'sans-serif'].join(','),
	},

        palette: {
    			primary: {
      		light: '#757ce8',
      		main: '#3f50b5',
      		dark: '#002884',
      		contrastText: '#fff',
   				 },
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
	);

	return(

			<ThemeProvider theme={theme}>
      <CssBaseline/>
				<Dashboard />
    </ThemeProvider>


	);
}
