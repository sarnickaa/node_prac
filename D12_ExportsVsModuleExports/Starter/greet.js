// exports = function() {
//     console.log('Hello')
// }

// console.log(exports)
// console.log(module.exports)

//module.exports is what is passed to exports - should point to same object in memory

//exports changed from empty object to function? NO! a new object is created in memory - the reference is broken when a variable is assigned a value with the = operator


//MUTATION - adding a method or property to an object
// not repointing the variable to another point in memory
exports.greet = function() {
    console.log('Hello')
}

console.log(exports)
console.log(module.exports)