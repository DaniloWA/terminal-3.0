import { jogoCopoRG , jogosGames, A_RG, B_RG, C_RG, close_RG } from "../../regex/jogos.js"
import { getInputValue } from "../../getDados/getDados.js"
import { adcElemento } from "../../adcElement/adcElement.js"
import { random } from "../../random/random.js"

const timeout = async ms => new Promise(res => setTimeout(res, ms));

let jogada = false; 
let play = false
let dica = true

export function jogoCopo(){
    let dados = getInputValue()
    if(dados.length == 0) return false
    let string = ''
    let statusCode = 'green'

    if(close_RG().exec(dados) && play == true){
        play = false
        jogada = true
        adcElemento('warn','Jogo Finalizado! [Jogo Copo]')
    }

    if(jogoCopoRG().exec(dados)){
        play = true
    }   

    if(jogosGames().exec(dados) && !jogoCopoRG().exec(dados)){
        adcElemento('error','Error: Falta de parametros')
        string = 'Experimenta: jogos list ou games list'
        statusCode = 'info'
        return [true, adcElemento(statusCode,string)] 
    } else {
        return[true, gameStart(dados)] 
    }

}

function gameStart(dados){
    if(play){
        if(dica){
            adcElemento('info','Bem vindo ao jogo do Copo!')
            adcElemento('info','Escolha em qual copo a bola está')
            adcElemento('info','[A]-[B]-[C] | basta digitar @A - @B - @C')
            adcElemento('warn','"@close" para fechar o jogo! Antes disso o jogo continua rodando por 1 minuto!')
            dica = false
        } else {
            adcElemento('info','Jogar novamente ? basta digitar @A - @B - @C')
        }
    
        esperarJogada()
        
        let win = coposRandom()
    
        if(A_RG().exec(dados)){
            if(checkWin("A", win)){
                return adcElemento('green','Parabéns você venceu!!! A WIN')
            }else{
                return adcElemento('green',`Derrota. Jogador: A. Certa: ${win}`)
            }
        }
    
        if(B_RG().exec(dados)){
            if(checkWin("B", win)){
                return adcElemento('green','Parabéns você venceu!!! B WIN')
            }else{
                return adcElemento('green',`Derrota. Jogador: B. Certa: ${win}`)
            }
        }
    
        if(C_RG().exec(dados)){
            if(checkWin("c", win)){
                return adcElemento('green','Parabéns você venceu!!! C WIN')
            }else{
                return adcElemento('green',`Derrota. Jogador: C. Certa: ${win}`)
            }
        }
    }
}


function coposRandom(){
    const copos = ['A','B','C']
    return copos[random(3,0)]
}

function checkWin(input,copoWin){
    jogada = true
    if(input == copoWin){
        return true
    } else {
        return false
    }
}

async function esperarJogada() {
    setTimeout(function(){
        adcElemento('warn','Demorou mais de 1 minuto para jogar. Jogo finalizado! [Jogo Copo]')
        jogada = true
   }, 60000)
    while (jogada === false) {
        await timeout(50)
    }; 
    jogada = false; 
}
