var majorityElement = function (nums) {
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
