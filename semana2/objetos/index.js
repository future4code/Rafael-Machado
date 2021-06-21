// Exercícios de interpretação de código

// 1-A
// Matheus Nachtergaele
// Virginia Cavendish
// Globo, 14h

// 2-A
// Objeto
// nome: "Juca", idade: 3, raca: "SRD"
// nome: "Juba", idade: 3, raca: "SRD"
// nome: "Jubo", idade: 3, raca: "SRD"

// 2-B
// Faz uma cópia inteira de um objeto para outro

// 3-A
// false
// undefined

// 3-B   
// A propriedade altura ainda não foi declarada dentro do objeto pessoa.


// >>>>>>>>>>>  Exercícios de escrita de código

// Exercício 1

const objetoPessoa = {
    nome: "Joseph Montana",
    apelidos: ["Joe Cool", "The Comeback Kid", "Joe"]
}

const funcao = (objetoPessoa) => {
    console.log(`Eu sou ${objetoPessoa.nome}, mas pode me chamar de: ${objetoPessoa.apelidos[0]}, ${objetoPessoa.apelidos[1]} ou ${objetoPessoa.apelidos[2]}`)
}

funcao(objetoPessoa)

const novoObjeto = {
    ...objetoPessoa,
    apelidos: ["Football", "Ice", "Bay"]
}

console.log(novoObjeto)

funcao(novoObjeto)

// 2 - a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

const pessoa1 = {
    nome: "Rafael",
    idade: 40,
    profissao: "Dev em 2022"
}

const pessoa2 = {
    nome: "Nathalia",
    idade: 38,
    profissao: "Assistente Administrativa"
}

const funcao2 = (pessoa) => {
    const varArray = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
    
    return varArray
}

const variavelComArray = funcao2(pessoa1)
console.log(variavelComArray)

funcao2(pessoa1)
funcao2(pessoa2)
console.log(funcao2(pessoa2))

// 3
const carrinho = []

const fruta1 = {
    nome: "pera",
    disponibilidade: true
}

const fruta2 = {
    nome: "mamao",
    disponibilidade: true
}

const fruta3 = {
    nome: "abacaxi",
    disponibilidade: true
}

const funcaoX = (frutaA, frutaB, frutaC) => {
    carrinho.push(frutaA, frutaB, frutaC)
}

funcaoX(fruta1, fruta2, fruta3)
console.log(carrinho)

