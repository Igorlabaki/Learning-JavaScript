const { isMainThread } = require("worker_threads")

// Operador Rest
function total(...numeros){
    let total = 0
    numeros.forEach(n=>{
        total+=n
    })
    return total
}

console.log(total(1,2,3,4,5,6,7))

//Operator Spread

const funcionario = {
    nome: 'Maria', salarios:2234.67
}

const clone = {ativo:true, ...funcionario}

console.log(funcionario)
console.log(clone)

// usar spread com array
const grupoA = ['Jaoa', 'Pedro','Gloria']
const grupoFinal = ['Maria',...grupoA,'Rafaela' ]

console.log(grupoFinal)