const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(resp => {
    const funcionarios = resp.data
    
    const mulher = funcionario => funcionario.genero == 'F'
    const chines = funcionario => funcionario.pais == 'China'
    const menorSalario = (func, funcAtual)=>{
        return func.salario < funcAtual.salario ? func : funcAtual
    }
    
    console.log(funcionarios.filter(mulher)
                            .filter(chines)
                            .reduce(menorSalario))
})

