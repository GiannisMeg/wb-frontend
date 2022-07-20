import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";

function App() {
	return (
		<div className="App">
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/shop" element={<HomePage />}></Route>
					<Route path="/details/:id" element={<DetailsPage />}></Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;
