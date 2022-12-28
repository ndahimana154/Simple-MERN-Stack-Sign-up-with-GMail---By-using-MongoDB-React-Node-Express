require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const connection = require('./db')
// Middlewares
app.use(express.json())
app.use(cors())
// Creating the port to use
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Listenning to port ${port}`)
})