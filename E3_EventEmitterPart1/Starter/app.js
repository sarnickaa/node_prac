const Emitter = require('./emitter')

const emtr = new Emitter()

emtr.on('greet', () => console.log('someone said hello'))
//event/property name - events are property names on an object
//this function will push the given function to the 'greet' proprty array on the emtr object

emtr.on('greet', () => console.log('a greeting occured'))
//2 listeners that will respond when the event occurs
console.log(emtr.events.greet)

//event occuring = you making it occur
emtr.emit('greet')
// loop through greet property array and invoke the functions