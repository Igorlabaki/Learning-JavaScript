const pessoa = {
    nome: 'Ana',
    idade: 3,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa),

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
}))

Object.defineProperty(pessoa, 'dataNascimento',{
    enumrable: true,
    writable: false, // nao da pra sobrescrever
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2014'
console.log(pessoa.dataNascimento)
console.log(Object.values(pessoa))


// Object.assign

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest,o1,o2)

console.log(o1,o2,dest)
