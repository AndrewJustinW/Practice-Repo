// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


// function incrementString(string) {
//     // return incrementedString
//     string = string.split('')

//     if (string[string.length - 1] == parseInt(string[string.length - 1]) && string[string-1] !== '9') {
//         string[string.length - 1]++
//         console.log(true)
//     }
//     else if (string[string.length - 1] !== parseInt(string[string.length - 1])) {
//         string.push('1')
//     }
//     else if (string[string.length-1] == '9' ){

//     }

// }

function incrementString(string) {
    console.log(`Oringinal String: ${string}`)
    let numArray = []
    let newString = string.split('')
    let zCount = '0'

    // remove numbers from Array and put them into separate array
    if (string.length == 0) {
        newString = "1"
    }
    else if (string.length == 1) {
        newString = parseInt(string)
        newString = newString + 1
        newString = newString.toString()
    }
    else if (string[string.length - 1].toLowerCase() !== string[string.length - 1].toUpperCase()) {
        newString.push('1')
        newString = newString.join('')
        console.log('This should add a 1 to the end only if there are no numbers in the original String>>>>>', newString)
    }
    else {
        for (i = newString.length; i > 0; i--) {
            if (newString[i] == parseInt(newString[i])) {
                numArray.push(newString[i])
                newString.pop(newString[i])
            }
        }
        let num = numArray.reverse().join('')

        for (i = 0; i < num.length; i++) {

            if (num[i] && num[i] !== 0) {
                newNum = parseInt(num)
            }
        }
        if (string[string.length - 1] == parseInt(string[string.length - 1])) {
            newNum++
            newString.push(newNum)
            newString = newString.join("")
            newString = newString.split("")
        }
        for (i = 0; i < newString.length; i++) {

            if (newString.length < string.length) {
                if (newString[i] / 1 == newString[i]) {
                    // console.log(newString[i])
                    newString.splice(newString.indexOf(newString[i]), 0, zCount.repeat(string.length - newString.length))
                    newString = newString.join('')
                }
            }

        }

    }
    if (Array.isArray(newString)) {
        console.log(newString.join(""))
    }
    else console.log(newString)
}

incrementString("foobar1")
console.log('=======================')
incrementString("foobar01")
console.log('=======================')
incrementString('foobar')
console.log('=======================')
incrementString('')
console.log('=======================')
incrementString('1')




// A BETTER WAY TO DO IT

// function incrementString(str){
//     var c = str[str.length-1];
//       switch(c){
//               case '0':
//               case '1':
//               case '2':
//               case '3':
//               case '4':
//               case '5':
//               case '6':
//               case '7':
//               case '8': return str.substring(0, str.length-1) + (parseInt(c)+1);
//               case '9': return incrementString(str.substring(0, str.length-1)) + 0;
//               default: return str+"1";
//                   }
//   }

