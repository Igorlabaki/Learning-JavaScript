const divisao = (dividendo, divisor) => {
    let produto = dividendo / divisor
    let sobra   = dividendo % divisor

    return `    Produto = ${produto}
    Sobra   = ${sobra}`
}

console.log(divisao(2,2))
console.log(divisao(10,3))

