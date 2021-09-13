//https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

// function getSum(a, b) {
// 	//Good luck!
// 	let array = [];
// 	let sum = 0;

// 	while (a < b) {
// 		array.push(a);
// 	}

// 	while (b < a) {
// 		array.push(b);
// 	}

// 	for (i = 0; i < array.length; i++) {
// 		sum += array[i];
// 	}

// 	console.log(array);
// 	console.log(sum);
// }

// getSum(3, 5);

function getSum(a, b) {
	//Good luck!
	let array = [];
	let sum = 0;
	while (a < b) {
		array.push(a);
		a++;
		console.log(array);
	}

	while (b <= a) {
		array.push(b);
		b++;
		console.log(array);
	}

	for (i = 0; i < array.length; i++) {
		sum += array[i];
	}
	console.log(sum);
}

getSum(3, 5);
