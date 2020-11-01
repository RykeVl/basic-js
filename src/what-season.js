const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	let today = new Date();
	if (date) {
		let months = date.getMonth();
		if (today.getTime() === date.getTime()) {
			throw 'THROWN';
		}
		if (months <= 1 || months === 11) {
			return 'winter';
		} else if (months <= 4) {
			return 'spring';
		} else if (months <= 7) {
			return 'summer';
		} else {
			return 'fall';
		}
		
	} else {
		return 'Unable to determine the time of year!';
	}
};