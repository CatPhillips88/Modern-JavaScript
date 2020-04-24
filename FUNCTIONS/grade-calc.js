// Mini function project - Grade Calculator

// student score
// total possible score

// generate the letter grade and percentage

// 15/20 - you got a c (75%)!
// A: 90 -100, B: 80 -89, C:70-79, D: 60-69, F: 0-59

let totalScore = function (studentScore, totalScore = 20) {
    let scoreCalculation = (studentScore / totalScore) * 100

    if (scoreCalculation >= 90) {
        return `You got a A (${scoreCalculation}%)`
    } else if (scoreCalculation >= 80) {
        return `You got a B (${scoreCalculation}%)`
    } else if (scoreCalculation >= 70) {
        return `You got a C (${scoreCalculation}%)`
    } else if (scoreCalculation >= 60) {
        return `You got a D (${scoreCalculation}%)`
    } else {
        return `You got a E (${scoreCalculation}%)`
    }
}

let results = totalScore(0)
console.log(results)

