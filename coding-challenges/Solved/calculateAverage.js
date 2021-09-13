// Write a function which calculates the average of the numbers in a given list.

//     Note: Empty arrays should return 0.


function find_average(array) {
    // your code here
    let sum = 0

    for (i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }


    if (array.length > 0) {
        console.log(sum / array.length)

    } else {
        console.log(0)
    }


}

find_average([])