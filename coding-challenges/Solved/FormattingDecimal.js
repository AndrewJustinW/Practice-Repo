// Each floating - point number should be formatted that only the first two decimal places are returned.You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Don't round the numbers! Just cut them after two decimal places!

// Right examples:
// 32.8493 is 32.84
// 14.3286 is 14.32

// Incorrect examples(e.g.if you round the numbers):
// 32.8493 is 32.85
// 14.3286 is 14.33

function twoDecimalPlaces(number) {
    // Your code here

    let numbers = number.toString().split('')
    let final = []

    for (i = 0; i < numbers.length; i++) {
        final.push(numbers[i])
        if (numbers[i] == '.') {
            final.push(numbers[i + 1], numbers[i + 2])
            break
        }
    }

    final = parseFloat(final.join(''))
    return final

}

twoDecimalPlaces(-7488.83485834983)