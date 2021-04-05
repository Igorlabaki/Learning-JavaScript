const notas = [7.1, 5.4, 5.6, 7.6]

// sem call back

let notasBaixas = []

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com callback

const notasBaixas2 = notas.filter(nota => nota < 7)

console.log(notasBaixas2)