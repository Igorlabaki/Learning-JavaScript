const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop()// remove o ultimo elemento
console.log(pilotos)
pilotos.push('Vertappen')
console.log(pilotos)
pilotos.shift()// remove o primeiro elemento
console.log(pilotos)
pilotos.unshift('Hamilton')//coloca me primeiro
console.log(pilotos)
pilotos.splice(3,0, 'Botas', 'Massa')
console.log(pilotos)
pilotos.splice(3,2)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)// faz outra array

console.log(algunsPilotos)
console.log(pilotos)
const algunsPilotos2 = pilotos.slice(1,3) // faz outra array

console.log(algunsPilotos2)



