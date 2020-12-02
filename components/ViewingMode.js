import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppMenuBar from './SiteHome'

export default function ViewingMode() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

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
		[prefersDarkMode]
	)

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppMenuBar />
		</ThemeProvider>
	)
}
