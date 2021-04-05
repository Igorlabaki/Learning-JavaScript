const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.45 }',
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Kit Lapis", "preco": 33.45 }',
    '{"nome": "Caneta", "preco": 7.50 }',
]

const transformaJASN = produto => JSON.parse(produto)
const apenasPreco    = produto => `R$ ${parseFloat(produto.preco).toFixed(2).replace('.',',')}`


const precos = carrinho.map(transformaJASN).map(apenasPreco)

console.log(precos)