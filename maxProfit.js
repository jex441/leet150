var maxProfit = function (prices) {
	let profit = 0;
	let minPrice = Infinity;

	for (let price of prices) {
		if (price < minPrice) {
			minPrice = price;
		}
		let dif = price - minPrice;
		if (dif > profit) {
			profit = dif;
		}
	}
	return profit;
};
