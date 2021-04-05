const { promises } = require("fs")

function gerarNumeroAleatorio(min,max,tempo){
    if(min>max){
        [max, min] = [min, max]
    }

    return new Promise(resolve =>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random()*fator + min)
        resolve(aleatorio)
    })
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumeroAleatorio(1,60,2000),
        gerarNumeroAleatorio(1,60,500),
        gerarNumeroAleatorio(1,60,500),
        gerarNumeroAleatorio(1,60,500),
        gerarNumeroAleatorio(1,60,500),
        gerarNumeroAleatorio(1,60,500)
    ])
}

gerarVariosNumeros().then(console.log)