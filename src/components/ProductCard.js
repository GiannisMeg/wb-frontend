import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductCard(props) {
	return (
		<div key={props.id}>
			<h2>{props.title}</h2>
			<img src={props.mainImage} />
			<h3>Category: {props.category}</h3>
			<h4>{props.description}</h4>
			<h3>Rating: {props.rating} ⭐️</h3>
			<h3>Price: {props.price} €</h3>
			<NavLink to={`/details/${props.id}`}>
				<h3>Read More</h3>
			</NavLink>
		</div>
	);
}
