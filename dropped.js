const input = [3, -1, -1, -1, -1, -1];

const algo = (array) => {
	let numThreads = 0;
	let dropped = 0;

	for (let i = 0; i < array.length; i++) {
		let cur = array[i];
		if (cur > 0) {
			numThreads += cur;
		} else {
			if (numThreads > 0) {
				numThreads += cur;
			} else {
				dropped += 1;
			}
		}
	}
	return dropped;
};

let res = algo(input);

console.log(res);
