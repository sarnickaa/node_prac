//NODE EVEN EMITTER
 const Emitter = require('events')
 const eventConfig = require('./config').events

 const emtr = new Emitter()


emtr.on(eventConfig.GREET, () => console.log('someone said hello'))

emtr.on(eventConfig.GREET, () => console.log('a greeting occured'))
// console.log(emtr.events.greet)

emtr.emit(eventConfig.GREET)

//MAGIC STRING = strings that have special meaning in code - strings are the basis for the logic in the code
//this relies on magic strings - thus if a typo occurs - its easy to create a bug 
//CHANGED 'greet' to refer to a config module that specifies the events that are occuring

