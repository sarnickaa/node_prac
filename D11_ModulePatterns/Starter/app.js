const greet = require('./greet1')
greet()

const greet2 = require('./greet2').greet
//explicitly getting the greet property on the module.exports object
// greet property is a function
// greet2.greet()
greet2()

let greet3 = require('./greet3')
greet3.greet3()
greet3.greeting3 = 'changed greeting'

const greet3b = require('./greet3')
greet3b.greet3()
// EVEN THOUGH a new object is made for greet3b - it calls the altered greeting3 message
// for any particular file name - require CACHES the result
// THAT IS RETURNED BY THE NODE core
// because the first tme node saw require called for greet3 - it cached the results/saved it
//next time require is called using that same file name - it returns the cached result
//because its an object - a reference is returned i.e. the same location in memory i.e. the object as altered
// the module.exports line creating a new object from the constructor is only ever run once for the file
// teh results are cached and returned on any subsequent require call - this includes any require calls across different JS files
// allows a single object to be created and used in different areas of the application

//IF YOU DO WANT DIFFERENT OBJECTS USE PATTERN 4
const greet4 = require('./greet4')
let newObj = new greet4() // greet4 is a constructor
newObj.greet4()

let newObj2 = new greet4()
newObj2.greeting4 = 'new greeting4'
newObj2.greet4()
newObj.greet4()

// const greet5 = require('./greet5')
// or
const greet5 = require('./greet5').greet5
greet5()
//CANT CHANGE greeting5 string - that variable is protected
