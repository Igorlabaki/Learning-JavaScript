let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a

console.log(dobro(2))

let ola = function(){
    return 'Ola'
}

let ola1 = () => { return 'ola'}

let ola2 = () => 'Ola'

let ola3 = _ => 'Ola'


console.log(ola())
console.log(ola1())
console.log(ola2())
