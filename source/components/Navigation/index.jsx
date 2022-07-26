import React, { useState, useMemo, useEffect } from "react";
import "./styles/style.scss"

export const Navigation = ( props ) => {
	let { title, ...rest } = props;
	let [ pageStart, setPageStart ] = useState( 1 );
	let [ pageIndex, setPageIndex ] = useState( props.page || 1 );
	let [ pageEnd, setPageEnd ] = useState( 7 );

	let list = useMemo(() => {

		let array = [];

		for( let n = pageStart; n < pageEnd; n++ ){
			array.push( n );
		};

		return array;
	}, [ pageStart, pageIndex, pageEnd ]);

	useEffect(() => {

		if( props.onChange )
			props.onChange({ index: pageIndex });

	}, [ pageIndex ]);

	return (
		<div className={ "nav" }>
			<div className={ "nav-list" }>
				<p className={"nav-list-left"}></p>
				{
					list.map(( index ) => {
						return(
							<div
								key={ "list:" + index }
								className={ "nav-page" + (index === pageIndex ? " nav-page-selected" : "") }
								onClick={() => setPageIndex( index ) }
							>{ index }</div>
						)
					})
				}
				<p  className={"nav-list-right"}></p>
			</div>
		</div>
	);
};