function area(largura,altura){
    const area = largura *altura
    if(area > 20){
        console.log(`Valor acima do permitido ${area}m2`)
    }
    else{
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(6,4,5,6,7,8))
console.log(area(9,5))



