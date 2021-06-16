// >>>>>>>>>>>>   Exercícios de interpretação de código

// 1) a. False
// b. False
// c. True
// d. boolean

// 2) No console será impresso os dois números como texto, já que o comando prompt retorna valores em "Strings".
// Então se o usuário digitou 15 e depois 7, o console vai imprimir 157.
// Temos que converter essas strings em números usando o comando Number.
// Para isso iremos adicionar o Number antes do comando prompt, não esquecendo dos parênteses.
// O código corrigido vai ficar assim:

// 3) 

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// >>>>>>>>>>>>>>  Exercícios de escrita de código

// >>> Exercício 1 <<< 

let nome1 = Number(prompt('Qual a sua idade?'))
let nomeAmigo = Number(prompt('Qual a idade do seu melhor amigo(a)?'))

console.log('Sua idade é maior do que a do seu melhor amigo?', nome1 > nomeAmigo)

console.log('Diferença de idade é:', nome1 - nomeAmigo)

// >>> Exercício 2 <<<

const numeroPar = Number(prompt('Digite um número par:'))

console.log(numeroPar % 2)

// O padrão é que em qualquer número par, o resto da divisão por 2 dá o resultado ZERO. Então quando 
// queremos achar um número ímpar por exemplo, o resto da divisão vai ser sempre diferente de zero.

// Como mencionado acima, digitando qualquer número ímpar teremos um resto de divisão DIFERENTE de zero.

// >>> Exercício 3 <<<

const idade = Number(prompt('Qual é a sua idade?'))

console.log('A sua idade em meses é:', idade * 12)
console.log('A sua idade em dias é:', idade * 365)
console.log('A sua idade em horas é:', idade * (24 * 365))

// >>> Exercício 4 <<<

const num1 = Number(prompt('Digite o primeiro número:'))
const num2 = Number(prompt('Digite o segundo número:'))

console.log('O primeiro número é maior que o segundo?', num1 > num2)
console.log('O primeiro número é igual ao segundo?', num1 === num2)
console.log('O primeiro número é divisível pelo segundo?', (num1 % num2) === 0)
console.log('O segundo número é divisível pelo primeiro?', (num2 % num1) === 0)

//  >>> DESAFIO  <<<

// >>> NÚMERO 1

// LETRA (A)
const fahrenheit = 77
console.log('77ºF equivalem a:', ((fahrenheit - 32) * (5/9) + 273.15), 'Kelvin')

// LETRA (B)
console.log('80ºC equivalem a:', ((80) * (9/5) + 32), 'Fahrenheit')

// LETRA (C)
console.log('30ºC equivalem a:', ((30) * (9/5) + 32), 'Fahrenheit e',(30 + 273.15), 'Kelvin')

// LETRA (D)

const valorCelsius = Number(prompt('Digite o valor em Celsius:'))

console.log ('O valor em ºC equivale a:', ((valorCelsius) * (9/5) + 32), 'Fahrenheit e',((valorCelsius) + 273.15), 'Kelvin')

// NÚMERO 2

const kwh = 0.05
valorInicial = 280 * kwh
valorDesconto = (valorInicial * 1.15)

// a) 
console.log('Consumo total da residência =', valorInicial)

// b)
console.log('Valor com 15% de desconto =', valorDesconto)

// Abaixo eu testei outra maneira de resolver o exercício da letra (b) 
console.log('Valor 15% de desconto - Outra maneira de resolver =', (valorInicial * 15) / 100 + (valorInicial))

// NÚMERO 3

// a)
console.log('20lb equivalem a ', 20 / 2.205, 'kg')

// d)
console.log('50ft equivalem a ', 50 / 3.281, 'm')

// g)
const valorFeet = Number(prompt('Digite o valor em feet:'))
const resultado = valorFeet / 3.281

console.log(valorFeet, "ft equivalem a ", resultado, "m")


















