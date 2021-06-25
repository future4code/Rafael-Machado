
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
         
            const pontuacaoUser = cartaUser.valor + cartaUser2.valor
            const pontuacaoComp = cartaComp.valor + cartaComp2.valor
         
               console.log(`Usuário -- cartas: ${cartaUser.texto} ${cartaUser2.texto} -- pontuação  ${pontuacaoUser}`)
               console.log(`Computador -- cartas: ${cartaComp.texto} ${cartaComp2.texto} -- pontuação  ${pontuacaoComp}`)

         if(pontuacaoUser > pontuacaoComp) {
            console.log("O usuário ganhou!")
         } else if(pontuacaoUser < pontuacaoComp) {
               console.log("O computador ganhou!")
         } else {
                  console.log("Empate!")
         }  
     
         
      } else {
         console.log("O jogo acabou")
      }   
   }

   iniciaJogo()






