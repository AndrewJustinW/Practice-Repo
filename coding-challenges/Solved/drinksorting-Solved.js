// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// drinks = [
//   {name: "lemonade", price: 50},
//   {name: "lime", price: 10}
// ]

// function sortDrinkByPrice(drinks) {
// 	let priceArray = [];
// 	for (i = 0; i < drinks.length; i++) {
// 		priceArray.push(drinks[i].price);
// 		console.log(priceArray);
// 	}
// 	priceArray.sort(function (a, b) {
// 		console.log(a - b);
// 	});
// }

function sortDrinkByPrice(drinks) {
	console.log(drinks.sort((a, b) => (a.price > b.price ? 1 : -1)));
}

sortDrinkByPrice([
	{ name: "lemonade", price: 50 },
	{ name: "lime", price: 10 },
]);
