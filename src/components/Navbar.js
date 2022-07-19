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
				<p className="brand-name">TheShop</p>
				<span className="link-1">
					<NavLink
						style={({ isActive }) =>
							isActive
								? {
										color: "white",
										pDecoration: "none",
								  }
								: { fontSize: "larger", pDecoration: "none" }
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
								? { color: "white", pDecoration: "none" }
								: {
										pDecoration: "none",
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
								? { color: "white", pDecoration: "none" }
								: {
										pDecoration: "none",
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
