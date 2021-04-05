const nums = [0,2,3,4,5,6,7]

let resultado = nums.map(n => n*2)

console.log(resultado)

let soma    = num => num +10
let triplo  = num => num *3
let paraDinheiro = num => `R$ ${parseFloat(num).toFixed(2).replace('.',',')}`

resultado = nums.map(soma).map(triplo).map(paraDinheiro)

console.log(resultado)
