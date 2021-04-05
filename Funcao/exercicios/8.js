
function historico (nome) {

    this.nome           = nome
    let quebraRecorde   = 0;
    let lista  = []

    const procuraMaximo = () => Math.max.apply(null,lista)

    const procuraMinimo = () => Math.min.apply(null,lista)
    
    this.inserePontos = pontos => {    
        if(pontos > this.getMaximo()){
            quebraRecorde++
        }
        lista.push(pontos)
    }

    this.getquebraRecorde = () => `Voce quebrou seu recorde ${quebraRecorde}`
    this.getLista   = () => lista
    this.getMaximo  = () => procuraMaximo(lista)
    this.getMinimo  = () => procuraMinimo(lista)
}


const igor = new historico("igor")

igor.inserePontos(10)
igor.inserePontos(10)
igor.inserePontos(30)
igor.inserePontos(40)
igor.inserePontos(10)

console.log(igor.getquebraRecorde())
console.log(igor.getMaximo())
console.log(igor.getMinimo())








