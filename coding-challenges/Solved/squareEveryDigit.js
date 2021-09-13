// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
	//may the code be with you
	let newArray = [];
	let finalNumber;
	num = [...num.toString()];
	num.forEach((number) => {
		let total = number ** 2;
		newArray.push(total);
	});

	finalNumber = parseInt(newArray.join(""));
	console.log(finalNumber);
}

squareDigits(3333);
