// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

// SOLVED

function abbrevName(name) {
	// code away
	let nameArray = name.split(" ");
	let initials = [];

	nameArray.forEach((word) => {
		initials.push(word[0]);
	});
	console.log(initials);

	let final = initials.join(".");
	console.log(final.toUpperCase());
}

abbrevName("David Mendieta");
