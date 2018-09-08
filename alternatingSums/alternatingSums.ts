function alternatingSums(a) {
	return a.reduce((returnArray, number, index) => {
		if (index % 2) {
			returnArray[1] += number;
		} else {
			returnArray[0] += number;
		}
		return returnArray;
	}, [0,0]);
}

console.log(alternatingSums([50, 60, 60, 45, 70]))