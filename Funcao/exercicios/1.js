const operacao = (a = 0 ,b = 0) => {
    console.log(`    Soma           = ${a + b}
    Subtracao      = ${a - b}
    Multiplicacao  = ${a * b}
    Divisao        = ${a / b}`)
}

operacao(5,6)

function operacao2 (a,b){   
    this.a = a
    this.b = b

    this.soma      = (a,b) => a + b
    this.subtracao = (a,b) => a - b
    this.multiplicacao = (a,b) => a * b
    this.divisao = (a,b) => a / b
}

const contas = new operacao2()

console.log(contas.divisao(2,3))
console.log(contas.soma(2,3))