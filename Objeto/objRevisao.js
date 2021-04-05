const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto['marca do produto'])
delete produto['marca do produto']
console.log(produto)


const carro = {
    modelo: "A4",
    valor: 890000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro:'Rua ABC',
            numero: 123
        }    
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Igor',
        idade: 30
    }],
    calcularValorSeguro: function(){
    } 
}

carro.proprietario.endereco.numero = 1000

console.log(carro)
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
