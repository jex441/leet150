var productExceptSelf = function (nums) {
	let answer = new Array(nums.length);

	let leftProduct = 1;
	for (let i = 0; i < nums.length; i++) {
		answer[i] = leftProduct;
		leftProduct *= nums[i];
	}
	console.log("leftProds:", answer);
	let rightProduct = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		answer[i] *= rightProduct;
		rightProduct *= nums[i];
	}

	return answer;
};
