let p = new Promise(function(resolve){
    resolve(['Ana','Carlos','Daniel'])
})

function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(elemento){
    return elemento[0]
}

function primeiraLetra(elemento){
    return elemento[0]
}

function letraMinuscula(letra){
    return letra.toLowerCase()
}

p.then(primeiroElemento)
 .then(primeiraLetra)
 .then(letraMinuscula)
 .then(console.log)
