import {Server} from 'restez'

const path = __dirname + '/controllers/**/*.js'
const mongooseConnectionString = process.env.CONNECTION_STRING

var mongoose = require('mongoose')
require('mongoose').Promise = Promise
let db = mongoose.createConnection(mongooseConnectionString)

let server = new Server({ mongooseConnection: db })

server.load(path).then(() => {
    server.listen(3000)
})