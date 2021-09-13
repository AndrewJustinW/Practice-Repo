// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"

// complete the function
// function solution(string) {
// 	let array = string.split();
// 	for (i = 0; i < array.length; i++) {
// 		if (array[i] == array[i].toUpperCase()) {
// 			newString = array[i];
// 		}
// 	}
// 	console.log(array);
// }

// solution("kingAjTheGreat");

function solution(string) {
	let array = [];
	for (i = 0; i < string.length; i++) {
		if (string[i] == string[i].toUpperCase()) {
			array.push(" ", string[i]);
		} else {
			array.push(string[i]);
		}
	}

	return array.join("");
}

solution("changeTheLetter");
