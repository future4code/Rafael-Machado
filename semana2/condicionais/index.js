// >>>>>>>>>>>     Exercícios de interpretação de código

// 1 - A
// O código pega um número que foi digitado pelo usuário e verifica se o número é divisivel por 2. 
// Se o resto da divisão for 0 o número é par e passou no teste,
// se o resto da divisão for diferente de 0, então o número é ímpar e não passou no teste.

// 1 - B
// Números pares

// 1 - C
// Números ímpares

// 2 - A
// Para que o usuário saiba qual o preço de determinada fruta

// 2 - B
// O preço da fruta Maçã é R$ 2.25

// 2 - C
// O preço da fruta Pêra é R$ 5   ...  Essa eu tive que rodar o código. Achei que ia dar um erro.

// 3 - A
// Está dizendo para o usuário digitar um número, e irá transformar
// um número do tipo string em um número do tipo número.

// 3 - B
// Para número 10 ... Esse número passou no teste
// Para número -10 ... Não vai aparecer nada, vai pular fora do bloco IF sem
// executar o que está dentro, e vai para o console.log(mensagem), e vai
// executar este comando

// 3 - C
// Não tenho certeza, acho que vai dar um erro pois a variável mensagem
// não está acessível pois ela está dentro do bloco do IF. Então não tem como
// imprimir essa mensagem, a não ser que o console.log estivesse dentro do
// bloco IF.

//     >>>>>>>>>>>>>>>>>>>>>>>   Exercícios de escrita de código

// 1 - A e B

// const idadeUsuario = Number(prompt("Digite sua idade:"))

// 1 - C

// if(idadeUsuario >= 18) {
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir")
// }

// 2 -- Tive que terminar com ELSE IF ao invés de ELSE, pois se eu colocasse ELSE o usuário poderia
// digitar qualquer coisa que não fosse M ou V que mostraria a mensagem Boa noite!

const verificaTurno = () => {
    const turnoAluno = prompt("Qual turno do dia você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno).").toUpperCase()

if(turnoAluno === "M") {
    console.log("Bom Dia!")
} else if(turnoAluno === "V") {
    console.log("Boa Tarde!")
} else if(turnoAluno === "N") {
    console.log("Boa Noite!")
}
}
// verificaTurno()

// 3 - SWITCH CASE

const verificaTurno2 = () => {
    const turnoAluno = prompt("Qual turno do dia você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno).").toUpperCase()

    switch(turnoAluno) {
        case "M":
            console.log("Bom Dia!")
            break
        case "V":
            console.log("Boa Tarde!")
            break
        case "N":
            console.log("Boa Noite!")
            break
        default:
            console.log("Digite uma letra válida!")    

    }
}
// verificaTurno2()

// 4


const cinema = () => {
    const generoFilme = prompt("Qual o gênero do filme que iremos assistir?").toLowerCase()
    const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

    if(generoFilme === "fantasia" && precoIngresso < 15) {
        console.log("Bom filme!")   
    } else {
        console.log("Escolha outro filme :(")
    }
}
cinema()


// DESAFIO 1

const cinema2 = () => {
    const generoFilme = prompt("Qual o gênero do filme que iremos assistir?").toLowerCase()
    const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

    if(generoFilme === "fantasia" && precoIngresso < 15) {
        const lanche = prompt("Qual snack você quer comprar?").toLowerCase()
        console.log("Bom filme!")
        console.log(`Aproveite o seu ${lanche}!`)  
    } else {
        console.log("Escolha outro filme :(")
    }
}
cinema2()


// DESAFIO 2

// Muito maneiro esse desafio 2!  :)
// Pena que não deu tempo de fazer!  






