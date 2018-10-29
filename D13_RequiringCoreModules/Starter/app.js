const util = require('util') // not a local file i.e. no './' prefix

const name = 'Aleks'

const greeting = util.format('Hello, %s', name)

util.log(greeting)