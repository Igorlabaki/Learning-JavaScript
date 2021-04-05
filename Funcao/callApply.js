function getPreco(imposto = 0, moeda ='R$'){
    return `${moeda} ${this.preco * (1- this.desc) * (1+imposto)}`
}

const produto = {
    nome: 'NoteBook',
    preco: 1233.22,
    desc: 0.14,
    getPreco
}

global.preco    = 20
global.desc     = 0.1
console.log(getPreco())
console.log(produto.getPreco())
 
const carro = {preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro,0.17,'R$'))
console.log(getPreco.apply(carro,[0.17,'R$']))


