const express = require("express")
const bodyParser = require("body-parser")
const app = express()
let port = 3000
app.listen(port,() => {
        console.log('Servidor rodando na porta ${port}')
})

app.use(bodyParser.json())

const users = {

}
app.get('/',(rec,res) => {
    res.json({ users })
})

app.get('/get',(rec,res) => {
    res.json({ users })
})

app.post('/Post',(rec,res) => {
    const {nome,cidade,idade} = rec.body
    users[nome] = {cidade,idade,nome}

    res.json((msg = "usuario criado com sucesso"))
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