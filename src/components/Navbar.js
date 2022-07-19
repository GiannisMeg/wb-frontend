import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./styles/nav.css";

export default function Navbar() {
	return (
		<div className="navbar">
			{" "}
			<SearchBar />
			<div className="navbar-list">
				<text className="brand-name">TheShop</text>
				<span className="link-1">
					<NavLink
						style={({ isActive }) =>
							isActive
								? {
										color: "white",
										textDecoration: "none",
								  }
								: { fontSize: "larger", textDecoration: "none" }
						}
						to="/"
					>
						Home
					</NavLink>
				</span>
				<span className="link-2">
					<NavLink
						style={({ isActive }) =>
							isActive
								? { color: "white", textDecoration: "none" }
								: {
										textDecoration: "none",
								  }
						}
						to="/shop"
					>
						Shop
					</NavLink>
				</span>
				<span className="link-3">
					<NavLink
						style={({ isActive }) =>
							isActive
								? { color: "white", textDecoration: "none" }
								: {
										textDecoration: "none",
								  }
						}
						to="/details/1"
					>
						About
					</NavLink>
				</span>
			</div>
		</div>
	);
}
