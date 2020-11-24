import React from 'react';
import MiniDrawer from "../components/SideBar"
import ViewingMode from "../components/ViewingMode"
import MediaControlCard from "../components/VideoEmbed"


function GetStarted() {
	return(
		<div>
			<ViewingMode>
			<MiniDrawer/>
			<MediaControlCard />
			</ViewingMode>
		</div>


	);
}

export default GetStarted
