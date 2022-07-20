import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";
import { useState } from "react";

function App() {
	const [jwt, set_jwt] = useState(null);

	return (
		<div className="App">
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/shop" element={<HomePage />}></Route>
					<Route path="/details/:id" element={<DetailsPage />}></Route>
					<Route path="/users/login" element={<LoginPage setToken={set_jwt}/>}></Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;
