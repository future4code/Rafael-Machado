// Exercícios de interpretação de código

// 1) a)
// 10
// 50

// b) Nada vai ser impresso no console.
// A função é executada e o cálculo acontece, porém o resultado não é guardado
// em nenhuma variável e também não é mostrado o resultado no console. 

// 2) a) Essa função pega o texto inserido pelo usuário e transforma todo ele
// para letras minúsculas, e também verifica se inclui a palavra "cenoura"

// b) i. true
// ii. true
// iii. true

// >>>>>>>>>>>  Exercícios de escrita de código

// // 1-a
// function sobreMim() {
//     console.log("Eu sou Rafael, tenho 40 anos, moro no Rio de Janeiro e sou estudante.")
    
// }

// sobreMim()

// // 1-b
// const imprimeSobreMim = (nome, idade, cidade, profissao) => {
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)

// }

// imprimeSobreMim("Rafael", 40, "Rio de Janeiro", "um Dev em 2022")

// // 2-a
// const calculaSoma = (num1, num2) => {
//     const soma = num1 + num2
//     return soma
// }

// const resultado = calculaSoma(8, 3)
// console.log(resultado)
// const resultado2 = Number(prompt("Insida a sua idade"))

// 2-b com Arrays

// const num1 = Number(prompt("Digite o primeiro número:"))
// const num2 = Number(prompt("Digite o segundo número:"))

// function maiorOuIgual(arrayNumeros){
//     const verifica = arrayNumeros[0] >= arrayNumeros[1]
//     return verifica
// }

// const numerosDigitados = [num1, num2]

// const resultado3 = maiorOuIgual(numerosDigitados)
// console.log(resultado3)

// 2-c

const parOuImpar = (numero) => {
    
    return numero % 2 === 0
}

console.log(parOuImpar(9))
console.log(parOuImpar(4))

// 2-d



const alteraTexto = function(texto) {
    return `${texto.length}, ${texto.toUpperCase()}`
}

const fraseUsuario = prompt("Insira um texto:")
console.log(alteraTexto(fraseUsuario))












