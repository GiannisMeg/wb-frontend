import React, { useEffect, useState } from "react";

export default function PriceFilter(props) {
	const [prices, setPrices] = useState([]);

	// we have to map ove the prices ranges that we get from the backend and insert an input - checkbox so every price range get an box
	 const URL_API = `http://localhost:4000/products/price/:minPrice/:maxPrice?range=0&range=15&range=15&range=50&range=50&range=150;
	useEffect(() => {

	}, []);
	//
	return (
		<div>
			<p>Price Filter</p>
			<ul></ul>
		</div>
	);
}
