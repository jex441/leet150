var hIndex = function (citations) {
	let h = 0;
	let arr = citations.sort((a, b) => b - a);

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= i + 1) {
			h = i + 1;
		} else {
			break;
		}
	}

	return h;
};
