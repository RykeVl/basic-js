const CustomError = require("../extensions/custom-error");

for (let i = 0; i < 26; i++) {

}
class VigenereCipheringMachine {
	constructor(direction = true) {
		this.direction = direction;
		this.alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
	}

	encrypt(message, key) {
		let msg = [...message.toUpperCase()];
		let keys = [...key.toUpperCase()];
		let position = 0;
		let result = msg.map(item => {
			if (this.alphabet.includes(item)) {
				let idx = (this.alphabet.indexOf(keys[position]) + this.alphabet.indexOf(item)) % this.alphabet.length;
				position = ++position % keys.length;
				return this.alphabet[idx];
			}
			return item;
		});
		return this.direction ? result.join('') : result.reverse().join('');
	}
	decrypt(message, key) {
		let msg = [...message.toUpperCase()];
		let keys = [...key.toUpperCase()];
		let position = 0;
		let result = msg.map(item => {
			if (this.alphabet.includes(item)) {
				let idx = this.alphabet.indexOf(item) - this.alphabet.indexOf(keys[position]);
				if (idx < 0) idx += this.alphabet.length;
				position = ++position % keys.length;
				return this.alphabet[idx];
			}
			return item;
		});
		return this.direction ? result.join('') : result.reverse().join('');
	}
}

module.exports = VigenereCipheringMachine;