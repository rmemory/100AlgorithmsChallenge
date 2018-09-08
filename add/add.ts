function add(param1: number, param2: number): number {
	return param1 + param2;
}


// Rest operator here turns args into an array
function add2(...param1: number[]): number {
	// let total = 0;

	// param1.forEach((num) => {
	// 	total += num;
	// });
	// return total;

	return param1.reduce((total, num) => {
		return total += num;
	}, 0);
}
console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));

