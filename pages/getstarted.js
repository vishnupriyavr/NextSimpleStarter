import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MiniDrawer from "../components/SideBar"
import ViewingMode from "../components/ViewingMode"
import MediaControlCard from "../components/VideoEmbed"
import CardContent from "../components/CardContent"
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	getStarted: {
		marginTop: 50,
		marginLeft: 90
	},
}));

function GetStarted() {
	const classes = useStyles();
  const theme = useTheme();
	return(
		<div>

				<ViewingMode/>
					<MiniDrawer/>
				<div className={classes.getStarted}>
					<CardContent>
					</CardContent>
				</div>
				<div className={classes.getStarted}>
				<MediaControlCard />
				</div>
				<div className={classes.getStarted}>
				<MediaControlCard />
				</div>


		</div>


	);
}

export default GetStarted
