//replacing exports with your own object

function Greeter4() {
  this.greeting4 = 'hello world4'
  this.greet4 = function() {
    console.log(this.greeting4)
  }
}

//exporting the constructor
module.exports = Greeter4
//module returns the ABILITY to create a new object
