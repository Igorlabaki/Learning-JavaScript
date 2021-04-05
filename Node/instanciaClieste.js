const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
contadorB.inc()
contadorC.inc()
contadorD.inc()

console.log(contadorB.valor)
console.log(contadorD.valor)