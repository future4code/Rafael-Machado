function obterEstatisticas(numeros: number[]): object{}  {

   

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    type stats = {
        maior: number,
        menor: number,
        media: number
        }

    const estatisticas: stats = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
const arrayNumeros: number[] = [1, 33, 2, 597, 7, 3]

obterEstatisticas(arrayNumeros)