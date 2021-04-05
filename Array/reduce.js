const alunos = [
        {nome: 'Igor',   nota: 7.5, bolsista: true},
        {nome: 'Erika',  nota: 6.5, bolsista: true},
        {nome: 'Jorge',  nota: 8.3, bolsista: false},
        {nome: 'Maria',  nota: 4.0, bolsista: false}, 
]



const resultado = alunos.map(a=>a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
},10)



//Tdos bolsistas?

const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))

// Algum bolsista

const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(a=>a.bolsista).reduce(algumBolsista))
