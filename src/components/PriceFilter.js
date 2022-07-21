import React, { useEffect, useState } from "react";

export default function PriceFilter(props) {
	const [prices, setPrices] = useState([]);

	// we have to map ove the prices ranges that we get from the backend and insert an input - checkbox so every price range get an box

	useEffect(() => {}, []);
	//
	return (
		<div>
			<p>Price Filter</p>
			<ul></ul>
		</div>
	);
}
