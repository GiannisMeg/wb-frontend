// import { useState } from "react";

export default function SearchBar() {
	return (
		<div>
			<div className="input-text">
				<input type="text" onSubmit={(e) => e.target.value} />
			</div>
		</div>
	);
}
