const greeting5 = 'hello world5'

function greet5() {
  console.log(greeting5)
}
//replace with new object
//only exposing the function greet5
//function will still have access to variable - but outside the module - will not have access to the variable
//revealing module patten (exposing only properties and methods you want via  a returned object)
// keeps outer code from changing module contents
module.exports = {
  greet5
}
