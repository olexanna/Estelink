import React from "react";
import ReactDOM from "react-dom";
import "@styles/fonts.scss";
import "@styles/main.scss";
import { App } from "@modules/app";
import { BrowserRouter } from "react-router-dom";




let controlApp = document.getElementById( "main" );

ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	controlApp
);