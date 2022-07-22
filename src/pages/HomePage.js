import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
// import PriceFilter from "../components/PriceFilter";
import ProductCard from "../components/ProductCard";
import '../components/styles/ProductCard.css'

const API_URL = "http://localhost:4000/products";
const API_URL2 = `http://localhost:4000/products/price/1/1200?range=1&range=150&range=151&range=500&range=501&range=1200`;

export default function HomePage(props) {
	const [products, set_products] = useState([]); // all products
	const [filtered_prices, setfilteredPrices] = useState([]); // all products filtered
	const [price, setPrice] = useState("1");
	const [secondPrice, setSecondPrice] = useState("1200");
	const [filtprices1, setfiltPrices1] = useState(true);
	const [filtprices2, setfiltPrices2] = useState(true);
	const [filtprices3, setfiltPrices3] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		if (props.jwt === "") {
			navigate("/users/login");
		}
	}, []);

	// all products
	const fetchProducts = async () => {
		const response = await axios.get(
			`http://localhost:4000/products/price/${price}/${secondPrice}?range=1&range=150&range=151&range=500&range=501&range=1200`
		); // getting paramas from the url
		set_products(response.data);
		// console.log(response.data);
	};
	useEffect(() => {
		fetchProducts();
	}, [secondPrice]); //


	return (
		<div className="h-container">
			<div className="h-container-upper">
				<div className="c-checkboxes">
					<div>
						<label>€0 - €150</label>
						<input
							type="checkBox"
							value={filtprices1}
							onChange={() => {
								setPrice("1");
								setSecondPrice("150");
							}}
						/>
					</div>
					<div>
						<label>€150 - €500</label>
						<input
							type="checkBox"
							value={filtprices2}
							onChange={() => {
								setPrice("151");
								setSecondPrice("500");
							}}
						/>
					</div>
					<div>
						<label>€500 - €1200</label>
						<input
							type="checkBox"
							value={filtprices3}
							onChange={() => {
								setPrice("500");
								setSecondPrice("1200");
							}}
						/>
					</div>
				</div>
				<ul className="product-card">
					{products &&
						products.map((product) => (
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
			</div>
			<Footer />
		</div>
	);
}
