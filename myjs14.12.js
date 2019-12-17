// Страница-тренажер


function payment(price, num) {
    return price / num
}

console.log(payment(0, 0))

function showArrayElements(arr) {
    for (var j = 0; j < arr.length; j++) {
        console.log(arr[j])
    }
}
showArrayElements(Infinity)

var sample = ["abc", false, 5, 1, true, 10, undefined, null]

// function buildArrayOfNumbers(oldArray) {
//     var newArray = []
//     for (i = 0; i < oldArray.length; i++) {
//         if (typeof oldArray[i] === "number") {
//             newArray.push(oldArray[i])
//         }
//     }
//     return newArray
// }

//console.log(buildArrayOfNumbers(sample))

function buildArrayOfNumbers() {
    var res = []
    for (i = 0; i < 5; i++) {
        res.push(i)
    }
    return res
}

console.log(buildArrayOfNumbers())

var x = undefined === "number"

function testElement(elem) {
    return elem
}

// console.log(testElement(x))

function sumArrayElements(arr) {
    if (!arr) return 0
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
}

sumArrayElements([null, NaN, false])

var str_1 = "abc",
    str_2 = "/",
    str_3 = "500"
var newString = str_1 + str_2 + str_3
console.log(newString.length)

var sample1 = "0123456789"
console.log(sample1.indexOf(5))

var sample2 = "good bad new old and so on..."
console.log(sample2.indexOf("bad"))

var sample3 = "Дело было под Полтавой..."
console.log(sample3.slice(14, sample3.length))

var sample4 = "Последний день Помпеи"
console.log(sample4.slice(sample4.indexOf("Помпеи"), sample4.length))

var sample5 = "$".repeat(5)
sample5 += "-%+/0".charAt(3)
sample5 += " 51 ".trim()
console.log(sample5)

function clearString(str) {
    var res = "",
        test = false

    for (var i = 0; i < str.length; i++) {
        test = str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58
        res += test ? str.charAt(i) : ""
    }

    return res
}

clearString("dt0e1*z2n3uo4s5a6kl7//8+9=")

var color = `#${(255).toString(16)}${(0).toString(16)}${(0).toString(16)}`
console.log(color)

function stringToArrayOfCodes(testString) {
    var tmp = testString.split("")
    var res = []

    for (var i = 0; i < tmp.length; i++) {
        res[i] = tmp[i].charCodeAt(0)
        console.log(res[i])
    }
    return res
}

console.log(stringToArrayOfCodes("0123456789"))

var users = [{
        name: "Ivan",
        email: "ivan78@gmail.com"
    },
    {
        name: "Georg",
        email: "georg.klep@gmail.com"
    },
    {
        name: "Stephan",
        email: "stephan.borg@gmail.com"
    }
]

users.includes({
    name: "Stephan",
    email: "stephan.borg@gmail.com"
})

var emptyArray = []
console.log(emptyArray.pop())
var arrayOfNumbers = []
for (var i = 0; i < 5; i++) {
    arrayOfNumbers.push(i + 1)
    // console.log(arrayOfNumbers.length)
}