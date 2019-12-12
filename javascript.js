//ДЗ 2

// упражнение 1

function splitAndPush(sourceString) {

    var arr = sourceString.split(" ")
    var letters = []

    for (var i = 0; i < arr.length; i++) {
        letters.push(arr[i][0])
    }
    console.log(letters)
    console.log(letters.join(""))
    return letters.join("") //не работае6т return((

}

splitAndPush("Backend As A Service");

// Упражнение 2
var newData = new Date()

console.log(newData)

function add() {

}