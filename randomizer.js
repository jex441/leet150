var RandomizedSet = function () {
	this.set = new Set();
	this.list = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
	if (!this.set.has(val)) {
		this.set.add(val, this.set.length);
		this.list.push(val);
		return true;
	} else {
		return false;
	}
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
	if (this.set.has(val)) {
		this.set.delete(val);
		this.list = this.list.filter((n) => n !== val);
		return true;
	} else {
		return false;
	}
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
	let int = Math.floor(Math.random() * this.list.length);
	return this.list[int];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
