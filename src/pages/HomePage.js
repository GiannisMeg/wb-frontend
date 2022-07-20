import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const API_URL = "http://localhost:4000/products/all";

export default function HomePage() {
	const [products, set_products] = useState([]);
	const [price, set_price] = useState([]);

	const fetchProducts = async () => {
		const response = await axios.get(API_URL);
		set_products(response.data);
		console.log(response.data);
	};
	useEffect(() => {
		fetchProducts();
	}, []);

	// if (price != []) {
	// 	const newList = products.map((product) => {
	// 		if (product.price > laag&& product.price < hoog) {
	// 			return product;
	// 		}
	// 	})
	// 	set_products(newList);
	// }

	return (

		<div className="h-container">
			<ul className="product-card">
				{products && products.map((product) => (
						<ProductCard
							id={product.id}
							key={product.id}
							title={product.title}
							price={product.price}
							description={product.description}
							rating={product.rating}
							mainImage={product.mainImage}
						/>
					))}
			</ul>
			<Footer />
		</div>
	);
}
