// Forma Literal

function fun1(){}

// Armazenar em uma variavel

const fun2 = function () {}

// Armazenar funcao dentro de Array

const array =  [function (a,b){return a + b}, fun1,fun2]

console.log(array[0](2,3))

//Armazernar em u atributo de objeto

const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar)

//Passar funcao como param

function run(fun){
    fun()
}

run(function(){console.log('Executando..')})

function falar(){ return 'Falando'}

run(falar())

//Uma funcao pode retornar/conter uma funcao

function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }
}


soma(2,3)(4)

const cincoMais = soma(2,3)
cincoMais(4)




