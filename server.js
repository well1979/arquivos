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

const User = require("./src/models/user.js")

app.get('/',(rec,res) => {
    res.json({ users })
})

app.get('/get',(rec,res) => {
    res.json({ users })
})

app.post('/Post',async(rec,res) => {
    const {nome,cidade,idade} = rec.body
    const user = await User.create({nome,cidade,idade})
    //users[nome] = {cidade,idade,nome}

    res.json((user))
})

app.put('/put/:nome',(rec,res) => {
    const {nome} = rec.params
    const {cidade,idade} = rec.body
    users[nome] = {cidade,idade,nome}
    console.log(nome,cidade,idade)
    res.json((msg = "usuario alterado com sucesso"))
})

app.delete('/delete/:mome',(rec,res) => {
    const {nome} = rec.params
    delete users[nome]
    res.json((msg = "usuario deletado com sucesso"))
})