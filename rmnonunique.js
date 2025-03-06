var removeDuplicates = function (nums) {
	let map = {};
	let k = 0;
	for (let i = 0; i < nums.length; i++) {
		let cur = nums[i];
		if (!map[cur]) {
			map[cur] = true;
			nums[k] = nums[i];
			k++;
		}
	}
	return k;
};
let input = [1, 1, 2];
const removeDuplicatesSorted = function (nums) {
	let k = 0;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== nums[i - 1]) {
			nums[k] = nums[i];
			k++;
		}
	}

	return k;
};
console.log(removeDuplicates(input), input);
