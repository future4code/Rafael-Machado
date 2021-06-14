// Exercícios de interpretação de código

// 1) 10 
// 10 5

// 2) 10 10 10

// 3) 
// let horasPorDia = prompt("Quantas horas você trabalha por dia?")
// let quantoRecebeDia = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${quantoRecebeDia/horasPorDia} por hora`)


// >>>>>>>>>>>   Exercícios de escrita de código   <<<<<<<<<<<


let nome
let idade

console.log('Tipo da variável nome:', typeof nome)
console.log('Tipo da variável idade:', typeof idade)

/* O tipo impresso foi Undefined que é o tipo INDEFINIDO. 
 Eu não atribuí nenhum valor para as variáveis acima.*/
 
 nome = prompt('Qual é o seu nome?')
 idade = prompt('Qual é a sua idade?')

 console.log('Nome:', nome, ' --  Tipo:', typeof nome)
 console.log('Idade:', idade, ' --  Tipo:', typeof idade)

 /* Apesar de ter digitado um número quando foi me perguntado a idade,
  o tipo typeof foi igual a STRING e não um NUMBER. Isso acontece
  pois todos os valores vindos do comando PROMPT vem como STRINGS. */

 console.log('Olá', nome, 'você tem', idade, 'anos.')

 // Exercício - 2

 const usaOculos = prompt('Você está usando óculos agora?')
 const mouseTipo = prompt('Seu MOUSE é sem fio?')
 const clima = prompt('Hoje o clima está muito frio?')

 console.log('Você está usando óculos agora?  - ', usaOculos)
 console.log('Seu MOUSE é sem fio?  - ', mouseTipo)
 console.log('Hoje o clima está muito frio?  - ', clima)

 // Exercício 3

 let a = 10
 let b = 25

 let troca = a

 a = b
 b = troca

 console.log('O novo valor de a é', a)
 console.log('O novo valor de b é', b)

 console.log(' ')

// DESAFIO

 const num1 = Number(prompt('Digite o primeiro número:'))
 const num2 = Number(prompt('Digite o segundo número'))

 console.log('O primeiro número digitado foi', num1, 'e o segundo número digitado foi', num2)
 console.log(' ')
 console.log('O primeiro número somado ao segundo número resulta em:', num1 + num2)
 console.log('O primeiro número multiplicado pelo segundo número resulta em:', num1 * num2)


 







 











 


