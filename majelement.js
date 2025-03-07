// Brute force:
const majorityElement = function (nums) {
	let maj = nums.length / 2;
	let map = {};

	for (let num of nums) {
		if (!map[num]) {
			map[num] = 1;
		} else {
			map[num]++;
		}
	}

	for (let key in map) {
		if (map[key] >= maj) {
			return parseInt(key);
		}
	}
};

// Optimal:
const majorityElement2 = function (nums) {
	let count = 0;
	let candidate = null;

	for (let num of nums) {
		if (count === 0) {
			candidate = num;
		}
		count += num === candidate ? 1 : -1;
	}

	return candidate;
};
