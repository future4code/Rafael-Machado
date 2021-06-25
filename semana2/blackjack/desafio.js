/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */




const boasVindas = () => {
   console.log("Boas vindas ao jogo de Blackjack!")
}    
   boasVindas()

const iniciaJogo = () => {

  
   if(confirm("Quer iniciar uma nova rodada?")) {
      const cartaUser = comprarCarta(); 
      const cartaUser2 = comprarCarta();
      const cartaComp = comprarCarta();
      const cartaComp2 = comprarCarta();   

         let arrayCartasUser = [cartaUser, cartaUser2]
         console.log (`Array Cartas do usuario:`, arrayCartasUser)
         console.log("")

         let arrayCartasPC = [cartaComp, cartaComp2]
         console.log("Array Cartas do PC:", arrayCartasPC)
         console.log("")
      
         const pontuacaoUser = cartaUser.valor + cartaUser2.valor
         const pontuacaoComp = cartaComp.valor + cartaComp2.valor
      
            if(pontuacaoUser === 22 || pontuacaoComp === 22) {
               console.log(`O Usuário ou o Computador receberam DOIS ASES (AA)! 
               Isso não vale! hahaha! :)  Novas cartas serão sorteadas!`)
               iniciaJogo()
            } else {
               if(confirm(
	               `Suas cartas são ${cartaUser.texto}  ${cartaUser2.texto}. A carta revelada do computador é ${cartaComp.texto}.` +
	               "\n"+  // \n faz pular a linha
                  "\n"+
	               "Deseja comprar mais uma carta?")) {
                      const compraNovasCartas = (numero) => {
                         ????????
                      }


                  } else {

                  }

               console.log(`Usuário -- cartas: ${cartaUser.texto} ${cartaUser2.texto} -- pontuação  ${pontuacaoUser}`)
               console.log(`Computador -- cartas: ${cartaComp.texto} ${cartaComp2.texto} -- pontuação  ${pontuacaoComp}`)
   
                  if(pontuacaoUser > pontuacaoComp) {
                     console.log("O usuário ganhou!")
                     } else if(pontuacaoUser < pontuacaoComp) {
                        console.log("O computador ganhou!")
                     } else {
                        console.log("Empate!")
                     } 

            }
         
         
  
      
   } else {
      console.log("O jogo acabou")
   }   
}

iniciaJogo()







