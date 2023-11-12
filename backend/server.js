const express = require('express')
//To run the server from different domains
const cors = require('cors')
//For form post
const bodyParser = require('body-parser')
const router = require('./routes/router')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin:'*',
    Credential:true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use('/',router)


mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
           })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));


const port = process.env.PORT
const server = app.listen(port, () => { 
    console.log(`Server is running on port ${port}`)
})