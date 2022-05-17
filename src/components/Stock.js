import React from "react";

function Stock({ key, stock, onAddToPortfolio }) {
	const { ticker, name, type, price } = stock;

	return (
		<div key={key} onClick={onAddToPortfolio}>
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">{price}</p>
				</div>
			</div>
		</div>
	);
}
export default Stock;
