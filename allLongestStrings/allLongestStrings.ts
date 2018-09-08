function allLongestStrings(inputArray) {
	let newStringArray = [];
	let maxLen = 0;

	inputArray.forEach((aString) => {
		if (aString.length > maxLen) {
			maxLen = aString.length;
			newStringArray = [];
			newStringArray.push(aString);
		} else if (aString.length === maxLen) {
			newStringArray.push(aString);
		}
	});

	return newStringArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));