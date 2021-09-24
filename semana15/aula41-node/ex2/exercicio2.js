// Exercício 2:

const number1 = Number(process.argv[3])
const number2 = Number(process.argv[4])

const operacao = process.argv[2]

switch (operacao) {
    case "soma":
        console.log(number1 + number2)
        break;
    case "subt":
        console.log(number1 - number2)
        break;
    case "mult":
        console.log(number1 * number2)
        break;
    case "div":
        console.log(number1 / number2)
        break;
}