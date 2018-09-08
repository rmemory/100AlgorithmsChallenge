function addTwoDigits(n: any): number {
	// const digitsArray = (""+n).split("");
	const digitsArray = n.toString().split('');
	return digitsArray.reduce((total, digit) => {
		return total += parseInt(digit);
	}, 0);
}

console.log(addTwoDigits(29));