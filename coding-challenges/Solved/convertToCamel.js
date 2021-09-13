// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str) {
    let sA = str.split("")
    let string = ''

    for (i = 0; i < sA.length; i++) {
        if (sA[i] == "_" || sA[i] == "-") {

            sA[i + 1] = sA[i + 1].toUpperCase()
            sA.splice(i, 1)

        }
        string += sA[i]
    }
    return string

}

toCamelCase("the-stealth-warrior")

