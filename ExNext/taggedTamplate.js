// tagged tamplate

function tag(partes,...valores){
    console.log(partes)
    console.log(valores)
    return 'Outras string'
}

const aluno ='Gui'
const situacao = 'Aprovado'

console.log(tag ` ${aluno} esta ${situacao}`)


function real(partes,...valores){
    const resultado = []
    valores.forEach((valor,indice)=>{
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice],valor)
    })
    return resultado.join('')
}

const preco = 29.90
const precParcela = 11
console.log(real`1x de ${preco} ou 3x de ${precParcela}`)