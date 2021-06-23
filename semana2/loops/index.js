// TRABALHAR NESTE ARQUIVO

// ######## Exercícios de interpretação de código

// 1) Enquanto o i for menor que 5, a variável valor recebe a soma de valor + i.
// Toda vez que executa o código, valor recebe valor + i, até que i passa a
// valer 4, onde é executado pela última vez o loop, e daí pula fora e executa
// console.log ...

// O resultado mostrado no console é 10

// 2 - A
// Somente os números maiores que 18, que são:
// 19, 21, 23, 25, 27, 30. Só que no console vão aparecer um número abaixo do
// outro, quebrando uma linha para cada número

// 2 - B
// Sim. Bastaria apagar o if (numero > 18) e dar um console.log(numero) dentro
// do bloco do for of, ficaria assim:
//   const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//   for (let numero of lista) {
//      console.log(numero)
//    }

// 3 
// *
// **
// ***
// ****


// >>>>>>>>>>>>>>>  Exercícios de escrita de código

// 1

const funcaoPets = () => {

const quantidadePets = Number(prompt("Quantos bichinhos de estimação você tem?"))
const listaPets = []

if(quantidadePets === 0){
    console.log("Que pena! Você pode adotar um pet!")
} else {
    
    for(let i = 0; i < quantidadePets; i++){
        const nomeDosPets = prompt("Digite o nome do seu pet:")
            listaPets.push(nomeDosPets)
            
    }
       
}
console.log(listaPets) 
}
// funcaoPets()

// 2

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// 2-A
const imprimeTodos = () => {
     
    for(let num of arrayOriginal) {
         console.log(num)
    }

}
// imprimeTodos()

// 2-B
const imprimeDivididosPor10 = () => {
     
    for(let num of arrayOriginal) {
        const novoNumero = num / 10 
        console.log(novoNumero)
    }

}
// imprimeDivididosPor10()

// 2-C
const arrayPares = []
const numPares = (arrayNumeros) => {
   

    for(let num of arrayNumeros) {
        if(num % 2 === 0){
            arrayPares.push(num)
        } 
        
    }
    return arrayPares

}
console.log(numPares(arrayOriginal))










  

