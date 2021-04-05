function Carro(velocidadeMaxima =  200, delta = 5){

    let velocidadeAtual = 0

     this.acelerar = function(){
        if(velocidadeAtual + delta <=  velocidadeMaxima){
            velocidadeAtual += delta
        }
        else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelociadeAtual = function(){
        return velocidadeAtual
    }

}

const uno = new Carro

uno.acelerar()
console.log(uno.getVelociadeAtual())


const ferrari = new Carro(350,20)

ferrari.acelerar()
console.log(ferrari.getVelociadeAtual())

