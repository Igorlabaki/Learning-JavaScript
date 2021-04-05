const times = new Set()

times.add('Sao Paulo').add('Sao Paulo').add('Santos')

console.log(times)
console.log(times.size)
console.log(times.has('Santos'))
console.log(times.has('santos'))
console.log(times.delete('Santos'))
console.log(times.has('Santos'))



const nomes = ['Igor', 'Igor','Erika']
const nomeSet = new Set(nomes)

console.log(nomes)
console.logs(nomeSet)