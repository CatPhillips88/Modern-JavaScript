// CHALLENGE SIXTEEN

// Create an array with 5 todos 
// Create a message: 'You have x todos'
// Then print the first and second to last items to the terminal
// Todo: walk the dog

const todos = ['Brush teeth', 'Wash face', 'Cream skin', 'Get dressed', 'Comb Hair']

const message = `You have ${todos.length} todos`

console.log(message)

const first = `Todo: ${todos[0]}`
const secondToLast = `Todo: ${todos[todos.length - 2]}`

console.log(first)
console.log(secondToLast)