function arrayChange(inputArray) {
	let totalMoves = 0;

	for (let i = 0; i < inputArray.length - 1; i++) {
		if (inputArray[i + 1] <= inputArray[i]) {
			const difference = (inputArray[i] - inputArray[i + 1]) + 1;
			inputArray[i + 1] += difference;
			totalMoves += difference;
		}
	}

	console.log(inputArray);
	return totalMoves;
}

console.log(arrayChange([1, 1, 1]));
