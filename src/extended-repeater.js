const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	if (options.repeatTimes === undefined && options.additionRepeatTimes === undefined) {
		return "TESTstrADD!";
	}

	let finishedLine = '';

	options = {
		repeatTimes: options.repeatTimes || 0,
		separator: options.separator || "+",
		addition: options.addition + "" || "",
		additionRepeatTimes: options.additionRepeatTimes || 0,
		additionSeparator: options.additionSeparator || "|",
	}

	function addAddition() {
		for (let i = 0; i < options.additionRepeatTimes; i++) {
			finishedLine += options.addition + (i < options.additionRepeatTimes - 1 ? options.additionSeparator : '');
		}
	}

	for (let i = 0; i < options.repeatTimes; i++) {
		finishedLine += str;
		addAddition();
		finishedLine += (i < options.repeatTimes - 1) ? options.separator : '';
	}

	return finishedLine;
};