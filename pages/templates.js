import React from 'react';
//import AppMenuBar from "../components/AppMenuBar"
import ViewingMode from "../components/ViewingMode"
import TemplateEmbed from "../components/TemplateEmbed"
//import MediaControlCard from "../components/VideoEmbed"
import { Grid } from "@material-ui/core"
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	spaceBetweenCards: {
		margin: 30
	}
}));


export default function Templates() {
	return(
		<div>

			<ViewingMode/>
				<TemplateEmbed />



		</div>


	);
}


