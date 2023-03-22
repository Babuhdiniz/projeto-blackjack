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


    console.log("Boas vindas ao jogo de BlackJack!")

    const novaRodada = confirm("Quer iniciar uma nova rodada?")

    function jogoNovaRodada() {

      if(novaRodada){
         let cartasUsuario1 = comprarCarta()
         let cartasUsuario2 = comprarCarta()
         let cartasComputador1 = comprarCarta()
         let cartasComputador2 = comprarCarta()

         let totalUsuarioValor = cartasUsuario1.valor + cartasUsuario2.valor
         let totalComputadorValor = cartasComputador1.valor + cartasComputador2.valor

         let totalUsuarioTexto1 = cartasUsuario1.texto
         let totalUsuarioTexto2 = cartasUsuario2.texto

         let totalComputadorTexto1 = cartasComputador1.texto
         let totalComputadorTexto2 = cartasComputador2.texto

         console.log(`Usuário - cartas: ${totalUsuarioTexto1} ${totalUsuarioTexto2} - pontuação ${totalUsuarioValor}`)
         console.log(`Computador - cartas: ${totalComputadorTexto1} ${totalComputadorTexto2} - pontuação ${totalComputadorValor}`)

      if (totalUsuarioValor > totalComputadorValor && totalUsuarioValor <= 21){
         console.log(`O usuário ganhou!`)
      }else if (totalComputadorValor > totalUsuarioValor && totalComputadorValor <= 21) {
         console.log(`O computador ganhou!`)
      }else if (totalUsuarioValor === totalComputadorValor){
         console.log(`Empate!`)

      }
      }else{

         console.log('O jogo acabou!')

      }

   }

   jogoNovaRodada()
    





