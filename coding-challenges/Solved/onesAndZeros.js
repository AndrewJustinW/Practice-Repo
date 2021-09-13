const binaryArrayToNumber = (arr) => {
	// your code

	const binaryString = arr.join("");
	console.log(parseInt(binaryString, 2));
};

binaryArrayToNumber([1, 1, 1, 1]);
