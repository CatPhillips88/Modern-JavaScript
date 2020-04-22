// Arguments

// Multiple Arguments

let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)


// Default Arguments
// If no argument value into the function then we can set a default value that is used instead.
// The example uses a number and string but we can use other data types


let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// CHALLENGE NINE

// Tip Calculator: create a function that calculates a tip percentage (20%) added to a restaurant bill

let calculateTip = function (total, tipPercent = .2) {
    return total * tipPercent
}

let getTip = calculateTip(100)
console.log(getTip)