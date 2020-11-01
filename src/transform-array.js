module.exports = function transform(arr) {
	let newArray = [];

	if (Array.isArray(arr)) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === '--discard-prev') {
				newArray.pop();
			} else if (arr[i] === '--double-next') {
				if (arr[i + 1] !== undefined) {
					newArray.push(arr[i + 1]);
				}
			} else if (arr[i] === '--double-prev') {
				if (arr[i - 1] !== undefined) {
					newArray.push(arr[i - 1]);
				}
			} else if (arr[i] === '--discard-next') {
				if (arr[i + 2] && arr[i + 2].toString().includes('-prev')) {
					i += 2;
				} else {
					i += 1;
				}
			} else {
				newArray.push(arr[i]);
			}
		}
	} else {
		throw new Error();
	}

	return newArray;
};