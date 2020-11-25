import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MiniDrawer from "../components/SideBar"
import ViewingMode from "../components/ViewingMode"
import MediaControlCard from "../components/VideoEmbed"


function GetStarted() {
	return(
		<div>

				<ViewingMode/>
					<MiniDrawer/>
					<MediaControlCard />

		</div>


	);
}

export default GetStarted
