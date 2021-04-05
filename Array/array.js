console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos')

aprovados = ['Bia','Carlos']

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[2] = 'Paulo'
aprovados.push('Jorge')
delete aprovados[2]
aprovados.length

console.log(aprovados[0])
console.log(aprovados.length)
console.log(aprovados)
aprovados.sort()// ordena a lista
console.log(aprovados)
aprovados.splice(1, 1)
console.log(aprovados)
aprovados.splice(1, 2)
console.log(aprovados)
aprovados.splice(1,1,'Joa','Eduardo')
console.log(aprovados)
aprovados.splice(0,'Joa','Eduardo')
console.log(aprovados)
aprovados.splice(0,2)
console.log(aprovados)
aprovados.splice(0,0,'Bia','Jorge')
console.log(aprovados)










