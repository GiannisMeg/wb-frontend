import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/ProductCard.css";

export default function ProductCard(props) {
	return (
		<div className="pd-container" key={props.id}>
			<div className="card-box">
				<div className="product-image">
					<img className="c-image" src={props.mainImage} />
				</div>
				<div className="card-info">
					<ul className="c-ul-pd">
						<li className="c-pd-title">{props.title}</li>
						<li className="c-pd-price">
							€{props.price} {props.rating} ⭐️
						</li>
						<li className="c-pd-description">{props.description}</li>
						<NavLink
							style={({ isActive }) =>
								isActive
									? { color: "dark blue", textDecoration: "none" }
									: { color: "#0d0e43", textDecoration: "none" }
							}
							to={`/details/${props.id}`}
						>
							Read More
						</NavLink>
					</ul>
				</div>
			</div>
		</div>
	);
}
