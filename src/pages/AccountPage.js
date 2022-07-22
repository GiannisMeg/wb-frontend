import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles/detailsPage.css";
import Footer from "../components/Footer";

export default function AccountPage(props) {
	const navigate = useNavigate();
  useEffect(() => {
    if (props.jwt === "") {
      navigate("/users/login");
    }
  }, []);
  console.log(props.jwt);

  return (
    <div>
      <h1>HELLO {props.user.name}</h1>
      <Footer />
    </div>
  );
}
