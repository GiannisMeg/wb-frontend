import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles/detailsPage.css";
import Footer from "../components/Footer";


export default function DetailsPage(props) {
	const navigate = useNavigate();

  useEffect(() => {
    if (props.jwt === "") {
      navigate("/users/login");
    }
  }, []);


  
  const [product, set_product] = useState(null);
  const [category, set_category] = useState([]);
  const id = parseInt(useParams().id);


	useEffect(() => {
		const fetchProduct = async () => {
			const specificProduct = await axios.get(
				`http://localhost:4000/products/${id}`
			);
			set_product(specificProduct.data);
		};
		fetchProduct();
	}, [id]);

	if (!product) return <div>Loading...</div>;

	return (
		<div>
			<div className="container">
				<div className="topContainer">
					<div className="spacer"></div>
					<span className="routeText">
						Home . Shop .{" "}
						<span className="rozeText">{product.title}</span>
					</span>
				</div>
				<div className="mainContainer">
					<div className="morePicturesBox" />
					<div className="pictureBox">
						<img src={product.mainImage} className="mainImage" />
					</div>
					<div className="textContainer">
						<div className="productTitle">{product.title}</div>
						<div className="star-box">
							{
								<>
									{[...Array(Math.floor(product.rating)).keys()].map(
										(e) => (
											<span className="full-star" />
										)
									)}
									{[
										...Array(5 - Math.floor(product.rating)).keys(),
									].map((e) => (
										<span className="empty-star" />
									))}
								</>
							}
						</div>
						<div className="productPrice">€{product.price}</div>
						<div className="productDescription">
							{product.description}
						</div>
						<button className="cartButton">Add to cart</button>
						<div className="categories">
							Categories: {product.category.title}
						</div>
					</div>
				</div>
				<div className="middleContainer" />
				<div className="containerBottom">
					<div className="navExtra">
						<div>Description</div>
						<div>Additional Info</div>
						<div>Reviews</div>
					</div>
					<div className="extraText">
						<div className="extraTitleStyle">Varius tempor.</div>
						<div className="extraDescriptionStyle">
							Aliquam dis vulputate vulputate integer sagittis. Faucibus
							dolor ornare faucibus vel sed et eleifend habitasse amet.
							Montes, mauris varius ac est bibendum. Scelerisque a, risus
							ac ante. Velit consectetur neque, elit, aliquet. Non varius
							proin sed urna, egestas consequat laoreet diam tincidunt.
							Magna eget faucibus cras justo, tortor sed donec tempus.
							Imperdiet consequat, quis diam arcu, nulla lobortis justo
							netus dis. Eu in fringilla vulputate nunc nec. Dui, massa
							viverr .
						</div>
					</div>
					<div className="extraText">
						<div className="extraTitleStyle">More details.</div>
						<div className="extraDescriptionStyle">
							Aliquam dis vulputate vulputate integer sagittis. Faucibus
							dolor ornare faucibus vel sed et eleifend habitasse amet.
							Montes, mauris varius ac est bibendum. Scelerisque a, risus
							ac ante. Velit consectetur neque, elit, aliquet. Non varius
							proin sed urna, egestas consequat laoreet diam tincidunt.
							Magna eget faucibus cras justo, tortor sed donec tempus.
							Imperdiet consequat, quis diam arcu, nulla lobortis justo
							netus dis. Eu in fringilla vulputate nunc nec. Dui, massa
							viverr .
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
