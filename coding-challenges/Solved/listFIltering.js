// In this kata you will create a function that takes a list of non - negative integers and strings and returns a new list with the strings filtered out.


function filter_list(list) {
    // Return a new array with the strings filtered out
    let q = []

    for (i = 0; i < list.length; i++) {



        if (typeof list[i] == "number") {
            q.push(list[i])
        }

    }
    console.log(q)
}

filter_list([1, 'a', 'b', 0, 15])