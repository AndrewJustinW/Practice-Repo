// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"



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
