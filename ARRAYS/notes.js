// Notes

// array values can be any data types
// there are a number of methods we can perform or mutate values in programming


const notes = ['Note 1', 'Note 2', 'Note 3']

// Bracket notation

// If we want to access a specific value within the array, we use bracket notation and index positioning
// index always starts at 0 
// If there is no value present within the array then it returns a undefined value

// console.log(notes[0]) // 'Note 1'
// console.log(notes[3]) // undefined

// the following example starts at the end of the list to access value, keep in mind that 
// the minus number is not an index position 
// console.log(notes[notes.length - 1]) // Note 3

// Manipulating an array

// push (method) - adds a value to the end of the array

// pop (method) - removes last value of the array
 
// shift (method) - removes first value of the array

// unshift (method) - adds a value to the beginning of the array

// splice (method) - removes and/or replace values from an array by using a starting position then removing the number
// of items after alternatively in replacing you can use bracket index notation to reassign a value

// notes.push('my new note')

// notes.pop()

// notes.shift()

// notes.unshift('my first note')

// notes.splice(1, 1, 'this is the new second item')

notes[2] = 'This is now the new note 3'

console.log(notes)




