import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
	const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([])

	useEffect(() => {
		fetch("http://localhost:3001/stocks")
			.then((r) => r.json())
			.then((data) => setStocks(data));
	}, []);

	function addToPortfolio() {
    const portfolioList = 
  }

	return (
		<div>
			<SearchBar />
			<div className="row">
				<div className="col-8">
					<StockContainer
						stocks={stocks}
						setStocks={setStocks}
						onAddToPortfolio={addToPortfolio}
					/>
				</div>
				<div className="col-4">
					<PortfolioContainer />
				</div>
			</div>
		</div>
	);
}

export default MainContainer;
