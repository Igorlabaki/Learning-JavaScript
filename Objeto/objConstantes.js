// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // nao da mais pra mexer no objeto
pessoa.nome = 'Maria'
pessoa.end  = 'Rua ABC' 
console.log(pessoa.nome)

console.log(pessoa.nome)
console.log(pessoa)