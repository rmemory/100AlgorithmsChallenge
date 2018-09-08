function alphabeticShift(inputString) {
	const inputArray = inputString.split('');
	
	return inputArray.reduce((final, aChar) => {
		if (aChar === 'z') {
			return final += String.fromCharCode("a".charCodeAt(0));
		} else {
			return final += String.fromCharCode(aChar.charCodeAt(0) + 1);
		}
	}, '');
}

console.log(alphabeticShift('crazy'));