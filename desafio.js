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


    
    
   console.log("Boas vindas ao jogo de BlackJack!");

const newGame = confirm("Quer iniciar uma nova rodada?")


function jogoDeCartas() {

   if(newGame){
      
      let cartasUsuario1 = comprarCarta()
      let cartasUsuario2 = comprarCarta()

      while(cartasUsuario1.valor == 11 && cartasUsuario1.valor == 11){
         cartasUsuario1 = comprarCarta()
         cartasUsuario2 = comprarCarta()
      }

      let cartasComputador1 = comprarCarta()
      let cartasComputador2 = comprarCarta()

      while(cartasComputador2.valor == 11 && cartasComputador2.valor == 11){
         cartasComputador1 = comprarCarta()
         cartasComputador2 = comprarCarta()
      }
     

      let continueGame = confirm(
         `Suas cartas são ${cartasUsuario1.texto} ${cartasUsuario2.texto}. A carta revelada do computador é ${cartasComputador1.texto}`  +
         "\n"+  // \\n faz pular a linha
         "Deseja comprar mais uma carta?"
      )

      let pontosUsuario = cartasUsuario1.valor + cartasUsuario2.valor 
      let pontosComputador = cartasComputador1.valor + cartasComputador2.valor

 
      let arrayCartasUsuario = [cartasUsuario1, cartasUsuario2]
      let cartasUsuario = ""
      while(continueGame){
         arrayCartasUsuario.push(comprarCarta())
         cartasUsuario = ""
         pontosUsuario = 0
         for(let i = 0; i < arrayCartasUsuario.length; i++) {
            pontosUsuario += arrayCartasUsuario[i].valor
            cartasUsuario += `${arrayCartasUsuario[i].texto} `
         }

         if(pontosUsuario > 21){
            continueGame = false
         }else{
            continueGame = confirm(
               `Suas cartas são ${cartasUsuario}. A carta revelada do computador é ${cartasComputador1.texto}`  +
               "\n"+  // \\n faz pular a linha
               "Deseja comprar mais uma carta?"
            )
         }
      }
      cartasUsuario = ""
      pontosUsuario = 0
      for(let i = 0; i < arrayCartasUsuario.length; i++) {
         pontosUsuario += arrayCartasUsuario[i].valor
         cartasUsuario += `${arrayCartasUsuario[i].texto} `
      }

      let arrayCartasComputador = [cartasComputador1, cartasComputador2]
      let cartasComputador = ""

      if(pontosUsuario <= 21 && pontosComputador != pontosUsuario){
         
         while(pontosComputador <= pontosUsuario){
            
            arrayCartasComputador.push(comprarCarta())
            cartasComputador = ""
            pontosComputador = 0
            for(let i = 0; i < arrayCartasComputador.length; i++) {
               pontosComputador += arrayCartasComputador[i].valor
               cartasComputador += `${arrayCartasComputador[i].texto} `
            }
         }
      }

      cartasComputador = ""
      pontosComputador = 0
      for(let i = 0; i < arrayCartasComputador.length; i++) {
         pontosComputador += arrayCartasComputador[i].valor
         cartasComputador += `${arrayCartasComputador[i].texto} `
      }



      let quemGanhou = ""
      if (pontosUsuario > 21 ){
         quemGanhou = 'O computador ganhou!'
      }else if (pontosComputador > 21 ){
         quemGanhou = 'O usuário ganhou!'
      }else if (pontosComputador == pontosUsuario){
         quemGanhou = 'Empate!'; 
      }else if (pontosUsuario > pontosComputador){
         quemGanhou = 'O usuário ganhou!'; 
      }else if (pontosComputador > pontosUsuario){
         quemGanhou = 'O computador ganhou!'
      }

      alert(`Suas cartas são : ${cartasUsuario} . Sua pontuação é  ${pontosUsuario} ` + "\n" +
      `As cartas do computador são ${cartasComputador} . A pontuação do computador é ${pontosComputador}.` + "\n" +
      quemGanhou
      ) 

      console.log(`Usuário - cartas: ${cartasUsuario1.texto} ${cartasUsuario2.texto} - pontuação ${pontosUsuario}`);
      console.log(`Computador - cartas: ${cartasComputador1.texto} ${cartasComputador2.texto} - pontuação ${pontosComputador}`);

      if (pontosUsuario > pontosComputador){
      console.log('O usuário ganhou!');
      }else if (pontosComputador > pontosUsuario){
         console.log('O computador ganhou!');
       }else if (pontosUsuario === pontosComputador){
      
         console.log('Empate!');
       }

   }else{
      console.log(('O jogo acabou, caso queira jogar novamente recarregue a página!')); 
   }
}


jogoDeCartas()