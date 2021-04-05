const jurosSimples = (cI, tJ, meses) => {
    let juros = cI * tJ
    for(let mes = 0; mes < meses; mes++ ){
       console.log(`Mes ${mes + 1} : a pagar ${cI +=juros}`) 
    }
} 

console.log('Juros compostos:')
const jurosComposto = (cI, tJ, meses) => {
    for(let mes = 0; mes < meses; mes++ ){
        console.log(`Mes ${mes + 1} : 
        juros ${cI * tJ}
        total pagar ${cI = cI + (cI * tJ) }
        `)
    }
} 

console.log('Juros simples:')
console.log(jurosSimples(1000,0.10, 4))
console.log('Juros compostos')
console.log(jurosComposto(1000,0.10, 4))

