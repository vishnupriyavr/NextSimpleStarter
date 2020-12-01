import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MiniDrawer from "../components/SideBar"
import ViewingMode from "../components/ViewingMode"
import MediaControlCard from "../components/VideoEmbed"
import CardContent from "../components/CardContent"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	getStarted: {
		marginTop: 50,
		marginLeft: 90
	},
	spaceBetweenCards: {
		margin: 30
	}
}));

function GetStarted() {
	const classes = useStyles();
  const theme = useTheme();
	return(
		<div>

				<ViewingMode/>
					<MiniDrawer>

						</MiniDrawer>
					<Grid container spacing={24}>
  					<Grid item md={3} className={classes.spaceBetweenCards}>
    					<div className={classes.getStarted}>
									<CardContent/>
							</div>
  					</Grid>
  					<Grid item md={3} className={classes.spaceBetweenCards}>
    					<div className={classes.getStarted}>
									<CardContent/>
							</div>
  					</Grid>
  					<Grid item md={3} className={classes.spaceBetweenCards}>
    					<div className={classes.getStarted}>
									<CardContent/>
							</div>
  					</Grid>
					</Grid>

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
