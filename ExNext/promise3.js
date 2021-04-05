function gerarNumeroAleatorio(min,max){
    if(min>max){
        [max, min] = [min, max]
    }

    return new Promise(resolve =>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random()*fator + min)
        resolve(aleatorio)
    })
}

gerarNumeroAleatorio(0,10)
        .then(numero => `O numero gerado foi ${numero}`)
        .then(console.log)