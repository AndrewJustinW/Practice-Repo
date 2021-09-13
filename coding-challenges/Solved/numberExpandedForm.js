// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    // Your code here

    num = num.toString().split('')
    let zeros = '0'
    let newArray = []

    for (i = 0; i < num.length; i++) {
        if (num[i] != 0) {
            // console.log(i)
            // console.log(num[i], num.length - num.indexOf(num[i]) - 1)
            newArray.push(num[i] + zeros.repeat(num.length - i - 1))
        }
    }
    console.log(newArray.join(' + '))
}

expandedForm(4982342)