function soma (){
    let soma = 0
    for (parametro in arguments){
        soma += arguments[parametro]
    }

    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1,3,4,5))
console.log(soma(1.2,'alo vc'))
console.log(soma('a','b','c'))
