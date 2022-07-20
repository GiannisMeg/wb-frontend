import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/loginPage.css";
import Footer from "../components/Footer";


export default function LoginPage (props) {
  const [email, set_email] = useState(null);
  const [password, set_password] = useState(null);

  const [jwt, set_jwt] = useState(null);

  const submit = (e) => {
    e.preventDefault(); // prevents the form from reloading the page automatically
    const getToken = async () => {
      const theToken = await axios.post(`http://localhost:4000/users/login`, {
        email: email,
        password: password,
      });
      props.setToken(theToken.data.jwt)
    };
    getToken();

    // if login successfull => clean fields
  }



  return (
    <div>
          <form id="login-form" onSubmit={submit}>
            <input type="text" name="email" className="login-form-field" placeholder="Email" onChange={e => set_email(e.target.value)} value={email}/>
            <input type="password" name="password" className="login-form-field" placeholder="Password" onChange={e => set_password(e.target.value)} value={password}/>
            <input type="submit" value="Login" id="login-form-submit"/>
          </form> 
      <Footer />
    </div>
  )
}