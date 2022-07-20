import React from "react";
import "./styles/footer.css";

export default function Footer() {
	return (
		<div className="footer-box">
			{" "}
			<div className="footer-list">
				<span className="c-the">
					The
					<span className="c-shop">Shop</span>
				</span>

				<ul className="ul-footer-links">
					<li className="f-link-1">Categories</li>
					<li className="f-link-2">My account</li>
					<li className="f-link-3">Follow us</li>
				</ul>
			</div>
			;
		</div>
	);
}
