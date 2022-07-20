import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./styles/nav.css";

export default function Navbar() {
  return (
    <div className="nav-box">
      {" "}
      <div className="navbar-list">
        <span className="c-the">
          The
          <span className="c-shop">Shop</span>
        </span>

        <ul className="ul-links">
          <li className="link-1">
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "white",
                      textDecoration: "none",
                    }
                  : { color: "#0d0e43", textDecoration: "none" }
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="link-2">
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? { color: "white", textDecoration: "none" }
                  : { color: "#0d0e43", textDecoration: "none" }
              }
              to="/shop"
            >
              Shop
            </NavLink>
          </li>
          <li className="link-3">
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? { color: "white", textDecoration: "none" }
                  : { color: "#0d0e43", textDecoration: "none" }
              }
              to="/details/1"
            >
              About
            </NavLink>
          </li>
        </ul>
        <div className="c-search">
          <SearchBar />
        </div>
        <div className="c-box"></div>
      </div>
    </div>
  );
}
