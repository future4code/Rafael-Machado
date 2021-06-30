// EXERCÍCIO 01

function inverteArray(array) {
  let novoArray = []
  const tam = array.length

    for(let i = tam -1; i >= 0; i--){
        novoArray.push(array[i])
    }
    console.log(novoArray)
    return novoArray
}



// EXERCÍCIO 02

function retornaNumerosParesElevadosADois(array) {
  const novoArray = []  
  
  for(let num of array){
        if(num % 2 === 0){
          num = num ** 2
          novoArray.push(num)
        }
    }
    console.log(novoArray)
    return novoArray
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const arrayPares = []

  for(let num of array) {
      if(num % 2 === 0){
          arrayPares.push(num)
      }
  }
  return arrayPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
    let valorMaximo = 0

    for(let num of array){
        if(num > valorMaximo){
           valorMaximo = num
        }
    }
    return valorMaximo
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
    const numElementos = array.length
    return numElementos
    }
    


// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 // boleano3 = true
  const booleano4 = !booleano3 // false
  const arrayRespostas = []

  arrayRespostas[0] = booleano1 && booleano2 && !booleano4
  arrayRespostas[1] = (booleano1 && booleano2) || !booleano3
  arrayRespostas[2] = (booleano2 || booleano3) && (booleano4 || booleano1)
  arrayRespostas[3] = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  arrayRespostas[4] = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
//                        false   &&     false     OU    true     &&  true     &&    true  ===  true  

  console.log(arrayRespostas)
  return arrayRespostas

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let i = 0
  arrayPares = []
  while(i < 2*n) {
      if(i % 2 === 0){
          arrayPares.push(i)
      }
      i++
  }
  console.log(arrayPares)
  return arrayPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
