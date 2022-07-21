import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import { useEffect, useState } from "react";

function App() {
  const [jwt, set_jwt] = useState("");
  const [user, set_user] = useState("");

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage jwt={jwt}/>} />
          <Route path="/shop" element={<HomePage jwt={jwt}/>} />
          <Route path="/details/:id" element={<DetailsPage jwt={jwt}/>} />
          <Route path="/users/login" element={<LoginPage setToken={set_jwt} setUser={set_user} />} />
					<Route path="/users/MyAccount" element={<AccountPage jwt={jwt} user={user}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
