// Exercícios de interpretação de código
// 1
// Vai aparecer o array completo e também os objetos 0, 1 e 2.
//
// 0: {nome: "Amanda Rangel", apelido: "Mandi"}
// 1: {nome: "Laís Petra", apelido: "Laura"}
// 2: {nome: "Letícia Chijo", apelido: "Chijo"}

// 2
// Vai retornar um novo array somente com os nomes
// ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]


// 3
// Vai retornar um novo array somente com dois objetos, em que os apelidos
// sejam diferentes de "Chijo", então vai retornar:
// 0: {nome: "Amanda Rangel", apelido: "Mandi"}
// 1: {nome: "Laís Petra", apelido: "Laura"}


/////// >>>>>>>>>>>>>>  EXERCÍCIOS DE ESCRITA DE CÓDIGO   <<<<<<<<<<<<<<<<<<<

// 1 - A

const arrayPets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const novoArrayPets = arrayPets.map((elemento) => {
     return elemento.nome
 })

 console.log(novoArrayPets)

// 1 - B

const salsicha = arrayPets.filter((item) => {
    return item.raca === "Salsicha"
}) 

console.log(salsicha)

// 1 - C

const arrayPoodle = arrayPets.filter((item) => {
    return item.raca === "Poodle"
})
console.log(arrayPoodle)

const arrayNome = arrayPoodle.map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})
console.log(arrayNome)


////////////////////    EXERCÍCIO -- 2  <<<<<<<<<<<<<<<<<<<<<

// 2 - A

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const nomeProdutos = produtos.map((item) => {
    return item.nome
})
console.log(nomeProdutos)

// 2 - B

const lista5Desconto = produtos.filter((item) => {
    return item.nome && item.preco
})
console.log(lista5Desconto)

const copiaLista = [...produtos]


////////////////////////////////////////

// 2 - C
const listaBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})
console.log(listaBebidas)

// 2 - D



    






