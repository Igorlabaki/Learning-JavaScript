//Object.preventExtesions

const produto =  Object.preventExtensions({nome: 'Qualquer', preco:1.99 , tag:'promocao'})

console.log('Extensivel:',Object.isExtensible(produto))

produto.nome= 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Objet.seal

const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))
pessoa.sobrenome = 'Janaina'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes
