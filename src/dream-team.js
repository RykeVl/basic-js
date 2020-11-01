const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (Array.isArray(members) === false) {
		return false;
	}

	let dreamTeam = [];

	for (let member of members) {
		if (typeof member === 'string') {
			member = member.trim();
			dreamTeam.push(member[0].toUpperCase());
		}
	}

	return dreamTeam.sort().join('');
};