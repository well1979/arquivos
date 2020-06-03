const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express()
let port = 3000
app.listen(port,() => {
        console.log('Servidor rodando na porta ${port}')
})

mongoose.connect("mongodb+srv://nodejs:admin@cluster0-yghw4.mongodb.net/test?retryWrites=true&w=majority" , { useNewUrlParser: true,useUnifiedTopology: true } )

app.use(bodyParser.json())

const users = {

}

app.use('/', require('./src/models/routes.js'))