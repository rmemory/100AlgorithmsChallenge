function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
	const yourWeakest = Math.min(yourLeft, yourRight);
	const yourStrongest = Math.max(yourLeft, yourRight);
	const friendsWeakest = Math.min(friendsLeft, friendsRight);
	const friendsStrongest = Math.max(friendsLeft, friendsRight);

	return (friendsWeakest === yourWeakest && friendsStrongest === yourStrongest);
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
