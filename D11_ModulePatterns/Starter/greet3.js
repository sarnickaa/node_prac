//replacing exports with your own object

function Greeter() {
  this.greeting3 = 'hello world3'
  this.greet3 = function() {
    console.log(this.greeting3)
  }
}

//creating new object
module.exports = new Greeter()
