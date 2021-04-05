function criarProduto(nome,preco){
    return{
        nome,
        preco,
        desocnto: 0.1
    }
}

console.log(criarProduto('Notebook',2119.0))
console.log(criarProduto('geladeira',1119.0))
