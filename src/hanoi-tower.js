const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	let stepsCount = Math.pow(2, disksNumber) - 1;
	let stepsInSecond = turnsSpeed / 3600;

	return {
		turns: stepsCount,
		seconds: Math.floor(stepsCount / stepsInSecond)
	}
};