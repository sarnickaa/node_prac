// will work essentially the same way the node JS event emmitter does

//allows you to say an event has happened and respond to it

//create an class to create multiple emitters

// event listener = code that responds to an event occuring (usually a function in JS that is invoked)
//multiple listeners can listen for the same event

class Emitter {
    constructor () {
        this.events = {}
    }

    on(type, listener) {
    this.events[type] = this.events[type] || []
    //if property 'type' doesn't exists - make it an array
    this.events[type].push(listener)
    //push listener function into array
    // an array of function is called 'events' - this is what nodeJS does
    }

    emit(type) {
        if(this.events[type]) {
            this.events[type].forEach(listenerFunction => listenerFunction())
        }
    }
}

module.exports = Emitter