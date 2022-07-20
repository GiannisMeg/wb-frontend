import { NavLink } from "react-router-dom";

export default function DetailsPage() {
	return (
		<div>
			<p>DetailsPage</p>
			<NavLink to="/products/:id">Back</NavLink>
		</div>
	);
}
