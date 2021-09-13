// https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript

// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)



// WORK IN PROGRESS: Continue later BECAUSE WTF

// Realization: You need to tally the bills in your possession my guy. 
// (Example: if someone pay's with $100 bill off rip and we start with a $50 bill, we have no way to give change cuz we dont have smaller bills even if we have $150 in the bank)

// SOLVED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function tickets(peopleInLine) {
	// ...
	let total = 0;
	let b25 = 0
	let b50 = 0
	let b100 = 0

	for (i = 0; i < peopleInLine.length; i++) {
		if (peopleInLine[i] == 25) {
			b25++
			total += peopleInLine[i];
			console.log(i);
			console.log(`They paid $25`);
			console.log(`Total is: $${total}`, `||$25 bills: ${b25} | $50: bills ${b50} | $100: ${b100}`);
		} else if (peopleInLine[i] == 50) {
			if (total < 25 || b25 < 1) {
				// return "NO";
				console.log(i);
				console.log("We don't have enough");
			} else if (total >= 25) {
				console.log(i);
				total += 25;
				b50++
				b25--
				console.log(`They paid $50 and received $25 as change`);
				console.log(`Total is: $${total}`, `||$25 bills: ${b25} | $50: bills ${b50} | $100: ${b100}`);
			}
		} else if (peopleInLine[i] == 100) {
			if (total < 75 || b50 < 1 && b25 < 1 || b25 < 3 && b50 == 0 || b50 > 1 && b25 == 0) {
				console.log(i);
				console.log("We don't have enough");
				// return "NO";
			} else if (total >= 75 && b50 >= 1 & b25 >= 1) {
				console.log(i);
				b100++
				b50--
				b25--
				total += 25;
				console.log(`They paid $100 and received $75 as change`);
				console.log(`Total is: $${total}`, `||$25 bills: ${b25} | $50: bills ${b50} | $100: ${b100}`);
			}
			else if (total >= 75 && b50 == 0 && b25 >= 3) {
				console.log(i)
				b100++
				b25 = b25 - 3
				total += 25;
				console.log(`They paid $100 and received $75 as change`);
				console.log(`Total is: $${total}`, `||$25 bills: ${b25} | $50: bills ${b50} | $100: ${b100}`);
			}

		}
	}
	console.log(b25, b50, b100)
	// return "YES";
}
tickets([25, 50, 25, 50, 100, 25, 25, 50]);
