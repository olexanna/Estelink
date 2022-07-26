import React, { useState, useEffect } from "react";
import "./styles/popup.scss"

export const Popup = ( props ) => {
	let { title, onChange, display, ...rest } = props;

	if( !onChange )
		onChange = () => {};

	return (
		<section className={ "popup" + (display ? "" : " hidden") }>
			<div className={ "popup-bg" } onClick={() => onChange( false ) }></div>

			<div className={ "popup-wrap" }>
				<p className={ "popup-header" }>
					<span className={ "popup-header-title" }>{ title }</span>
					<span className={ "popup-header-close" } onClick={() => onChange( false ) }></span>
				</p>

				<div className={ "popup-content" }>
					{ display ? props.children : null }
				</div>
			</div>
		</section>
	);
};