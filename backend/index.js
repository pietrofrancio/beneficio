const express = require("express")
const app = express()
const cors = require('cors')

const beneficio = require("./controller/beneficio.controller")

const PORT = 3000
const hostname = 'localhost'
const conn = require('./db/conn')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.post("/beneficio", beneficio.cadastrar)
app.get("/beneficio", beneficio.listar)
app.get("/beneficio/:id", beneficio.consultar)
app.delete("/beneficio/:id", beneficio.apagar)

app.get("/", (req, res)=>{
    res.status(200).json({message: "API de reembolso de motoristas"})
})
conn.sync()
.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})

.catch((err)=>{
    console.error("Erro ao conectar com o banco de dados:", err)
})