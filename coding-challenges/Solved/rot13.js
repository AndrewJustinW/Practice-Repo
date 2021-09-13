//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
// ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13.
// If there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
	//your code here
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	message = [...message];
	let array = [];
	let phrase;

	message.forEach((character) => {
		if (character.toLowerCase() != character.toUpperCase()) {
			for (i = 0; i < alphabet.length; i++) {
				if (character.toLowerCase() == alphabet[i]) {
					if (alphabet[i + 13]) {
						if (character == character.toUpperCase()) {
							console.log("Letter:", character);
							array.push(alphabet[i + 13].toUpperCase());
						} else {
							array.push(alphabet[i + 13]);
						}
					} else if (!alphabet[i + 13]) {
						if (character == character.toUpperCase()) {
							console.log("Letter:", character);
							array.push(alphabet[i - 13].toUpperCase());
						} else {
							array.push(alphabet[i - 13]);
						}
					}
				}
			}
		} else {
			array.push(character);
		}
	});

	phrase = array.join("");

	console.log(phrase);
}

rot13("Andrew");

// FINAL SUBMISSION
// function rot13(message){
// 	let alphabet = "abcdefghijklmnopqrstuvwxyz";
// 	message = [...message];
// 	let array = [];
// 	let phrase;

// 	message.forEach((character) => {
// 	  if (character.toLowerCase() != character.toUpperCase()) {
// 		for (i = 0; i < alphabet.length; i++) {
// 		  if (character.toLowerCase() == alphabet[i]) {
// 			if (alphabet[i + 13]) {
// 			  if (character == character.toUpperCase()) {
// 				array.push(alphabet[i + 13].toUpperCase());
// 			  } else {
// 				array.push(alphabet[i + 13]);
// 			  }
// 			} else if (!alphabet[i + 13]) {
// 			  if (character == character.toUpperCase()) {
// 				array.push(alphabet[i - 13].toUpperCase());
// 			  } else {
// 				array.push(alphabet[i - 13]);
// 			  }
// 			}
// 		  }
// 		}
// 	  } else {
// 		array.push(character);
// 	  }
// 	});

// 	phrase = array.join("");

// 	return phrase;
//   }
