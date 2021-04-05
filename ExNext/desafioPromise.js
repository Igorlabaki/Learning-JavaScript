const fs = require('fs')
const path = require('path')

const texto = 'Linha1\nLinha2\nLinha3\nLinha4'


fs.writeFile(__dirname + '/dados.txt',texto,err => {
    console.log(err||'Arquivo Criado')
})


function lerArquivo(caminho){
    return new Promise(resolve=>{
       fs.readFile(caminho,function(_,conteudo){
            resolve(conteudo.toString())
       }) 
    })
}

const caminho = path.join(__dirname + '/dados.txt')
lerArquivo(caminho).then(conteudo => conteudo.split('\n'))
                   .then(linhas => console.log(linhas[0]))