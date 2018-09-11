function arrayMaxConsecutiveSum(inputArray, k) {
	const sumArray = [];

	for (let i = 0; i < inputArray.length - (k - 1); i++) {
		let sum = 0;

		for (let j = 0; j < k; j++) {
			sum += inputArray[i + j];
		}

		sumArray.push(sum);
	}

	return Math.max(...sumArray);
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));