const CustomError = require("../extensions/custom-error");

let catCount = 0;

module.exports = function countCats(array) {
	catCount = 0; 

	function walkThroughArray (inner_array) {
		for (let i = 0; i < inner_array.length; i++) {
			if (Array.isArray(inner_array[i])) {
				walkThroughArray(inner_array[i]);
			} else {
				if (inner_array[i] === '^^') {
					catCount++;
				}
			}
		}
	}

	walkThroughArray(array);

	return catCount;
};