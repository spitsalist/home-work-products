const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT
const router = require('./src/Router')

const app = express()
app.use(express.json())
app.use(router)

try {
    app.listen(PORT,() => {
        console.log(`Server is running on port ${PORT}`)
    })
}catch(err){
    console.log(err)
}