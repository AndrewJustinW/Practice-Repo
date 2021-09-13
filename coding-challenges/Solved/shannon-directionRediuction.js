function dirReduc(arr) {
	// ...
	const dirs = {
		NORTH: "SOUTH",
		SOUTH: "NORTH",
		EAST: "WEST",
		WEST: "EAST",
	};

	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == dirs[result[result.length - 1]]) {
			result.pop();
			console.log("Result after pop", result);
		} else {
			result.push(arr[i]);
			console.log("Result after push", result);
		}
	}
	return result;
}
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
