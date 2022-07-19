import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
	const [products, set_products] = useState([]);

	useEffect(() => {
		set_products([]);
	}, []);

	return (
		<div className="container">
			<p className="banner">HomePage</p>
			<div className="product-card">
				{products.length !== 0 &&
					products.map((product) => (
						<ProductCard
							id={product.id}
							key={product.id}
							title={product.title}
							price={product.price}
							description={product.description}
							rating={product.rating}
							mainImage={product.mainImage}
							category={product.category.title}
						/>
					))}
			</div>
		</div>
	);
}
