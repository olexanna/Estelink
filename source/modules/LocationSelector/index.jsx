import React, { useEffect, useMemo, useState } from "react";
import { Navigation } from "@components/Navigation";

import "./styles/location.selector.scss"

export const LocationSelector = () => {

	const [ page, setPage ] = useState( 0 );

	let list = useMemo(() => {

		let array = [];

		for( let n = 0; n < 9; n++ ){
			array.push( n );
		};

		return array;
	}, []);

	return (
		<div className={ "ls" }>

			<div className={ "ls-search" }>
				<input className={ "ls-search-input" } placeholder={"Укажите индекс почтового отделения"} type={"text"}></input>
				<button className={ "ls-search-btn" }>Поиск</button>
			</div>

			<div className={ "ls-filters" }>
				<p className={"ls-filters-title"}>Параметры фильма</p>

				<div className={"ls-filters-data-wrap"}>
					<div className={"ls-filters-data"}>
							<select id="area" className={"ls-filters-items"}>
								<option value="Ленинградская">Ленинградская</option>
								<option value="Новгородская">Новгородская</option>
								<option value="Московская">Московская</option>
							</select>

							<select id="city"  className={"ls-filters-items"}>
								<option value="Санкт-Петербург" >Санкт-Петербург</option>
								<option value="Новгород">Новгород</option>
								<option value="Москва">Москва</option>
							</select>

							<select id="district" className={"ls-filters-items"}>
								<option value="Фрунзенский">Фрунзенский</option>
								<option value="Московский">Московский</option>
								<option value="Адмиралтейский">Адмиралтейский</option>
							</select>

							<button className={ "ls-filters-accept" }>Применить</button>
						</div>

						<p className={"ls-filters-btn"}>
							<span className={"ls-filters-btn-list"}></span>
							<span className={"ls-filters-btn-zoom"}></span>
							<span className={"ls-filters-btn-print"}></span>
						</p>
					</div>
			</div>

			<div className={ "ls-map" }></div>

			<div className={ "ls-addAll" }>добавить все отобранные отделения</div>

			<div className={ "ls-list" }>{
				list.map(( index ) => {
					return (
						<div className={ "ls-list-item" } key={ "list:" + index }>
							<div className={ "ls-list-item-text" }>
								Россия, Москва <br/>
								ул. Коштоянца, 33
							</div>
							<span className={ "ls-list-item-add" }>+ Добавить</span>
						</div>
					)
				})
			}</div>

			<Navigation page={ page } onChange={( event ) => setPage( event.index ) }/>
		</div>
	);
};