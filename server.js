const express = require("express")
const app = express()
let port = 3000
app.listen(port,() => {
        console.log('Servidor rodando na porta ${port}')
})


app.get('/',(rec,res) => {
    res.send("Minha primeira rota")
})