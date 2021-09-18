const express = require('express')
const cors = require('cors')
const dbConnection = require('./database/config')

class Server{

    constructor(){

        this.app = express()

        dbConnection()

    }

    middlewares(){

        this.app.use(express.json())

        this.app.use(cors())

    }

    execute(){

        this.app.listen(process.env.PORT)

    }

}

module.exports = Server