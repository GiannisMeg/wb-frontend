// import { NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/detailsPage.css";

export default function DetailsPage() {
  const [product, set_product] = useState([]);
  const id = parseInt(useParams().id);
  console.log(parseInt(id));

  useEffect(() => {
    const fetchProduct = async () => {
      const specificProduct = await axios.get(
        `http://localhost:4000/products/${id}`
      );
      set_product(specificProduct.data);
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="container">
      <div className="topContainer" />
      <div className="mainContainer">
        <div className="morePicturesBox" />
        <div className="pictureBox">
          <img src={product.mainImage} className="mainImage" />
        </div>
        <div className="textContainer">
          <div className="productTitle">{product.title}</div>
          <div className="productPrice">€{product.price}</div>
          <div className="productDescription">{product.description}</div>
        </div>
      </div>
      <div className="middleContainer" />
      <div className="containerBottom">
        <div className="navExtra">
          <div>Description</div>
          <div>Additional Info</div>
          <div>Reviews</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
