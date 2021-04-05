const soma = function (x,y) {
    return x + y
}

const imprimiResultado =  function (a,b,operacao = soma){
    console.log(operacao(a,b))
}

imprimiResultado(3, 4)
imprimiResultado(3, 4, soma)
imprimiResultado(3, 4, function(x,y) {
    return x - y
})
imprimiResultado(3, 4, function(x,y) {
    return x * y
})
imprimiResultado(3, 4, function(x,y) {
    return x / y
})

const pessoa = {
    falar: function(){
        console.log('opa')
    }
}

const pessoa2 = {
    falar(){
        console.log('opa')
    }
}

pessoa.falar()
pessoa2.falar()