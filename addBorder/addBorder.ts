function addBorder(picture: string[]): string[] {
	const lengthOfWall = picture[0].length + 1;
	
	for (let i = 0; i < picture.length; i++) {
		picture[i] = "*".concat(picture[i]);
		picture[i] = picture[i].concat("*");
	}

	// Create string for top and bottom
	const wall = "*".repeat(lengthOfWall);

	// Prepend string on to the beginning of array
	picture.unshift(wall);

	// Push string on to the end of the array
	picture.push(wall);

	return picture;
}

console.log(addBorder(["abc", "ded"]));