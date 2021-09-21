// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. 
// Tente atribuir um número a esta variável. O que acontece?

const minhaString: string = "Sou Front-ender"

// O VsCode mostra mensagem de alerta: Type 'number' is not assignable to type 'string' , porque
// a variável que eu tentei atribuir era do tipo number e não string

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
// Como podemos fazer para que essa variável também aceite strings?

const meuNumero: number | string = 7

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

enum CoresArcoIris {
    AZUL = "Azul",
    ROXO = "Roxo",
    AMARELO = "Amarelo",
    BRANCO = "Branco"
}

type pessoa = {
    class: CoresArcoIris
}


const Breno: pessoa = {
    class: CoresArcoIris.AZUL
}

const Giovanna: pessoa = {
    class: CoresArcoIris.ROXO
}

const Nathalia: pessoa = {
    // nome: "Nathalia",
    // idade: 39,
    // corFavorita: "Amarelo"
    class: CoresArcoIris.AMARELO
}




// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
// Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.






