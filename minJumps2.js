var jump = function (nums) {
	let farthest = 0;
	let steps = 0;
	let currentEnd = 0;

	for (let i = 0; i < nums.length - 1; i++) {
		farthest = Math.max(nums[i] + i, farthest);
		if (i === currentEnd) {
			steps++;
			currentEnd = farthest;
		}
	}
	return steps;
};
