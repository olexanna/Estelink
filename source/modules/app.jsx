import React, { useState } from "react";
import { LocationSelector } from "@modules/LocationSelector";
import { Popup } from "@components/Popup";
import "@styles/main.scss"


export const App = () => {
	const [ locPopUp, setLocPopUp ] = useState( true );

	return (
	<section className={"app"}>

		<button onClick={() => setLocPopUp( !locPopUp ) }>Open</button>

		<Popup display={ locPopUp } title={ "Почтовые отделения" } onChange={( e ) => setLocPopUp( e ) }>
			<LocationSelector/>
		</Popup>

	</section>
	);
};