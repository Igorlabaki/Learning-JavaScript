//Closure e o escopo criado quando uma funcao e declarada
//Esse escopo permite a funcao acessar

//Contexto Lexico

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao())