// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
// For C: do not mutate input.

// More examples in test cases. Good luck!

// If you like this Kata, please try:

// Word values


// function solve(s) {

//     // using regular expression to remove vowels from the string.
//     s = s.replace(/[aeiou]/ig, '')
//     console.log(s)
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     let alphArray = alphabet.split('')
//     let nums = []

//     // Creates numsArray
//     for (i = 0; i < s.length; i++) {
//         alphArray.forEach(letter => {
//             if (s[i] == letter) {
//                 console.log(letter)
//                 nums.push(alphArray.indexOf(letter) + 1)

//             }
//         });
//     }

//     // Ordering to get the highest number in first position.
//     nums = nums.sort((a, b) => a - b).reverse()

//     console.log(nums[0])
// }

// KINDA HACKY (maybe) BUT IT WORKS 

function solve(s) {
    let count = 0
    s = s.split('')
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let alphArray = alphabet.split('')
    let newArray = []
    let anotherArray = []
    final = []

    // This process is to filter the vowels out and separate groups of consonants ====================================================
    for (i = 0; i < s.length; i++) {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
            newArray.push(' ')
        }
        else {
            newArray.push(s[i])
        }
    }

    let subArray = (newArray.join('').split('')) // Create new array (subArray) => Make newArray into string => Take out the spaces and put it backinto array.
    console.log(subArray)
    // ===================================================================================================================================

    subArray.forEach(sub => {
        for (j = 0; j < sub.length; j++) {
            if (alphabet.includes(sub[j])) {
                anotherArray.push(alphArray.indexOf(sub[j]) + 1)    // retreiving the alphabet count (a=1, b=2 etc...) for each letter in the substring and pushing it into an array.
            }
            else {
                anotherArray.push(sub[j]) // separate the substrings by spaces in "anotherArray"
            }
        }
    });

    for (i = 0; i < anotherArray.length; i++) {
        if (anotherArray[i] !== ' ') {

            count = count + anotherArray[i]
            final.push(count)
        }
        else if (anotherArray[i] == ' ') {
            count = 0
        }
    }
    console.log(anotherArray)
    final = final.sort((a, b) => b - a)// place highest number consonant into index 0
    console.log(final[0])
}
solve("strength") //57

