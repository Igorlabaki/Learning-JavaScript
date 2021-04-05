 const porta = 3003
 const bodyParser = require('body-parser')
 const express = require('express')
 const app = express()
 const bancodeDados = require('./bancodeDados')

 app.use(bodyParser.urlencoded({extended: true}))

 app.get('/produto',(req,resp,next)=>{
     resp.send(bancodeDados.getProdutos())
 })

 app.get('/produto/:id',(req,resp,next)=>{
    resp.send(bancodeDados.getProduto(req.params.id))
})

app.post('/produto',(req,resp,next)=>{
    const produto = bancodeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    resp.send(produto)
})

app.put('/produto/:id',(req,resp,next)=>{
    const produto = bancodeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    resp.send(produto)
})

app.delete('/produto/:id',(req,resp,next)=>{
    const produto = bancodeDados.excluirPoduto(req.params.id)
    resp.send(produto)
})

 app.listen(porta,()=>{
     console.log(`Servidor executando na porta ${porta}`)
 })