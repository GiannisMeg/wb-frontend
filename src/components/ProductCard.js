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
							€{props.price} {props.rating} ⭐️⭐️⭐️⭐️
						</li>
						<li className="c-pd-description">{props.description}</li>
						<NavLink
							style={({ isActive }) =>
								isActive
									? {
											color: "dark blue",
											textDecoration: "none",
									  }
									: {
											color: "#0d0e43",
											textDecoration: "none",
									  }
							}
							to={`/details/${props.id}`}
						>
							Read More
						</NavLink>
						<div className="c-icons">
							<svg
								width="15"
								height="16"
								color="blue"
								viewBox="0 0 15 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<ellipse
									cx="12.2017"
									cy="12.1637"
									rx="12.2017"
									ry="12.1637"
									fill="white"
								/>
								<path
									d="M0.083374 1.54169C0.083374 1.37593 0.149222 1.21696 0.266432 1.09975C0.383642 0.982535 0.542614 0.916687 0.708374 0.916687H1.17337C1.96504 0.916687 2.44004 1.44919 2.71087 1.94419C2.89171 2.27419 3.02254 2.65669 3.12504 3.00335C3.15276 3.00117 3.18056 3.00005 3.20837 3.00002H13.6234C14.315 3.00002 14.815 3.66169 14.625 4.32752L13.1017 9.66835C12.9651 10.1474 12.6762 10.5689 12.2786 10.869C11.881 11.1692 11.3965 11.3316 10.8984 11.3317H5.94171C5.43962 11.3317 4.95142 11.1668 4.55214 10.8624C4.15287 10.558 3.86462 10.1309 3.73171 9.64669L3.09837 7.33669L2.04837 3.79669L2.04754 3.79002C1.91754 3.31752 1.79587 2.87502 1.61421 2.54502C1.44004 2.22419 1.30004 2.16669 1.17421 2.16669H0.708374C0.542614 2.16669 0.383642 2.10084 0.266432 1.98363C0.149222 1.86642 0.083374 1.70745 0.083374 1.54169ZM4.31087 7.03335L4.93671 9.31585C5.06171 9.76752 5.47254 10.0817 5.94171 10.0817H10.8984C11.1248 10.0817 11.3451 10.0079 11.5258 9.87152C11.7065 9.73514 11.8379 9.54358 11.9 9.32585L13.3475 4.25002H3.48754L4.29921 6.98919L4.31087 7.03335Z"
									fill="#111c85"
								/>
								<path
									d="M7.16671 13.8334C7.16671 14.2754 6.99111 14.6993 6.67855 15.0119C6.36599 15.3244 5.94207 15.5 5.50004 15.5C5.05801 15.5 4.63409 15.3244 4.32153 15.0119C4.00897 14.6993 3.83337 14.2754 3.83337 13.8334C3.83337 13.3913 4.00897 12.9674 4.32153 12.6548C4.63409 12.3423 5.05801 12.1667 5.50004 12.1667C5.94207 12.1667 6.36599 12.3423 6.67855 12.6548C6.99111 12.9674 7.16671 13.3913 7.16671 13.8334V13.8334ZM5.91671 13.8334C5.91671 13.7228 5.87281 13.6169 5.79467 13.5387C5.71653 13.4606 5.61055 13.4167 5.50004 13.4167C5.38953 13.4167 5.28355 13.4606 5.20541 13.5387C5.12727 13.6169 5.08337 13.7228 5.08337 13.8334C5.08337 13.9439 5.12727 14.0498 5.20541 14.128C5.28355 14.2061 5.38953 14.25 5.50004 14.25C5.61055 14.25 5.71653 14.2061 5.79467 14.128C5.87281 14.0498 5.91671 13.9439 5.91671 13.8334Z"
									fill="#111c85"
								/>
								<path
									d="M13.0001 13.8334C13.0001 14.2754 12.8245 14.6993 12.5119 15.0119C12.1994 15.3244 11.7754 15.5 11.3334 15.5C10.8914 15.5 10.4675 15.3244 10.1549 15.0119C9.84234 14.6993 9.66675 14.2754 9.66675 13.8334C9.66675 13.3913 9.84234 12.9674 10.1549 12.6548C10.4675 12.3423 10.8914 12.1667 11.3334 12.1667C11.7754 12.1667 12.1994 12.3423 12.5119 12.6548C12.8245 12.9674 13.0001 13.3913 13.0001 13.8334V13.8334ZM11.7501 13.8334C11.7501 13.7228 11.7062 13.6169 11.628 13.5387C11.5499 13.4606 11.4439 13.4167 11.3334 13.4167C11.2229 13.4167 11.1169 13.4606 11.0388 13.5387C10.9606 13.6169 10.9167 13.7228 10.9167 13.8334C10.9167 13.9439 10.9606 14.0498 11.0388 14.128C11.1169 14.2061 11.2229 14.25 11.3334 14.25C11.4439 14.25 11.5499 14.2061 11.628 14.128C11.7062 14.0498 11.7501 13.9439 11.7501 13.8334Z"
									fill="#111c85"
								/>
							</svg>
							<br />
							<svg
								width="16"
								height="16"
								color="blue"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<ellipse
									cx="12.2017"
									cy="12.1637"
									rx="12.2017"
									ry="12.1637"
									fill="white"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3.6129 4.00493C3.6129 1.79307 5.57707 0 8 0C10.4229 0 12.3871 1.79307 12.3871 4.00493C12.3871 6.2168 10.4229 8.00987 8 8.00987C5.57707 8.00987 3.6129 6.2168 3.6129 4.00493ZM8 1.41351C6.43222 1.41351 5.16129 2.57373 5.16129 4.00493C5.16129 5.43614 6.43222 6.59636 8 6.59636C9.56778 6.59636 10.8387 5.43614 10.8387 4.00493C10.8387 2.57373 9.56778 1.41351 8 1.41351Z"
									fill="#111c85"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3.87097 10.8369C2.58824 10.8369 1.54839 11.7862 1.54839 12.9571V14.0769C1.54839 14.094 1.56192 14.1085 1.58036 14.1112C5.83197 14.7449 10.168 14.7449 14.4196 14.1112C14.4381 14.1085 14.4516 14.094 14.4516 14.0769V12.9571C14.4516 11.7862 13.4118 10.8369 12.129 10.8369H11.7772C11.75 10.8369 11.7229 10.8408 11.6971 10.8485L10.8036 11.1148C8.98187 11.6579 7.01813 11.6579 5.19637 11.1148L4.30294 10.8485C4.27707 10.8408 4.25004 10.8369 4.22283 10.8369H3.87097ZM0 12.9571C0 11.0055 1.73309 9.42337 3.87097 9.42337H4.22283C4.41328 9.42337 4.60252 9.45087 4.78356 9.50483L5.67699 9.77115C7.18645 10.2211 8.81355 10.2211 10.323 9.77115L11.2164 9.50483C11.3975 9.45087 11.5867 9.42337 11.7772 9.42337H12.129C14.2669 9.42337 16 11.0055 16 12.9571V14.0769C16 14.7867 15.4365 15.3919 14.6691 15.5063C10.2523 16.1646 5.74771 16.1646 1.33086 15.5063C0.563493 15.3919 0 14.7867 0 14.0769V12.9571Z"
									fill="#111c85"
								/>
							</svg>{" "}
							<br />
							<svg
								width="16"
								height="16"
								color="blue"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<ellipse
									cx="12.2017"
									cy="12.1637"
									rx="12.2017"
									ry="12.1637"
									fill="white"
								/>
								<path
									d="M10 6.66667H8V4.66667C8 4.48986 7.92976 4.32029 7.80473 4.19526C7.67971 4.07024 7.51014 4 7.33333 4C7.15652 4 6.98695 4.07024 6.86193 4.19526C6.7369 4.32029 6.66666 4.48986 6.66666 4.66667V6.66667H4.66666C4.48985 6.66667 4.32028 6.7369 4.19526 6.86193C4.07024 6.98695 4 7.15652 4 7.33333C4 7.51014 4.07024 7.67971 4.19526 7.80474C4.32028 7.92976 4.48985 8 4.66666 8H6.66666V10C6.66666 10.1768 6.7369 10.3464 6.86193 10.4714C6.98695 10.5964 7.15652 10.6667 7.33333 10.6667C7.51014 10.6667 7.67971 10.5964 7.80473 10.4714C7.92976 10.3464 8 10.1768 8 10V8H10C10.1768 8 10.3464 7.92976 10.4714 7.80474C10.5964 7.67971 10.6667 7.51014 10.6667 7.33333C10.6667 7.15652 10.5964 6.98695 10.4714 6.86193C10.3464 6.7369 10.1768 6.66667 10 6.66667ZM14.4733 13.5267L12 11.0733C12.9601 9.87627 13.425 8.35686 13.2992 6.82753C13.1734 5.2982 12.4664 3.87519 11.3237 2.8511C10.1809 1.827 8.6892 1.27967 7.15528 1.32165C5.62136 1.36362 4.16181 1.99171 3.07676 3.07676C1.99171 4.16181 1.36362 5.62136 1.32164 7.15528C1.27967 8.6892 1.827 10.1809 2.85109 11.3237C3.87519 12.4664 5.2982 13.1734 6.82753 13.2992C8.35686 13.425 9.87627 12.9601 11.0733 12L13.5267 14.4533C13.5886 14.5158 13.6624 14.5654 13.7436 14.5993C13.8249 14.6331 13.912 14.6505 14 14.6505C14.088 14.6505 14.1751 14.6331 14.2564 14.5993C14.3376 14.5654 14.4114 14.5158 14.4733 14.4533C14.5935 14.329 14.6607 14.1629 14.6607 13.99C14.6607 13.8171 14.5935 13.651 14.4733 13.5267ZM7.33333 12C6.41035 12 5.5081 11.7263 4.74067 11.2135C3.97324 10.7007 3.3751 9.97191 3.02189 9.11919C2.66868 8.26647 2.57627 7.32816 2.75633 6.42291C2.9364 5.51767 3.38085 4.68615 4.0335 4.0335C4.68614 3.38086 5.51766 2.9364 6.42291 2.75634C7.32815 2.57627 8.26646 2.66869 9.11919 3.0219C9.97191 3.3751 10.7007 3.97324 11.2135 4.74067C11.7263 5.5081 12 6.41035 12 7.33333C12 8.57101 11.5083 9.75799 10.6332 10.6332C9.75799 11.5083 8.57101 12 7.33333 12Z"
									fill="#111c85"
								/>
							</svg>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
}
