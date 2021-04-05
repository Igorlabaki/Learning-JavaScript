const produtos = [
    {nome: 'Notebook',          preco: 2499,        fragil: false},
    {nome: 'Ipad Pro',          preco: 4199,        fragil: true},
    {nome: 'Copo de Vidro',     preco: 12.49,       fragil: true},
    {nome: 'Copo de Plastico',  preco: 18.99,       fragil: false},
]

console.log(produtos.filter(p => p.preco > 2000))

const isCaro = produto => produto.preco > 2000
const fragil = produto => produto.fragil

console.log(produtos.filter(isCaro).filter(fragil))