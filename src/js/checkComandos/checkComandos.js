import { help } from "../help/help.js"
import { gerarSenha } from "../gerarSenha/gerarSenha.js"
import { analisarTexto } from "../analisarTexto/analisarTexto.js"
import { embaralharTexto } from "../embaralhar/embaralhar.js"
import { respostaCalculos } from "../calculadora/calculadora.js"
import { adcElemento } from "../adcElement/adcElement.js"
import { getInputValue } from "../getDados/getDados.js";
import { gerarDestino } from "../gerarDestinos/gerarDestinos.js"


export function Comandos(){
    let dados = getInputValue()
    if(dados.length == 0) return false
       
    
    
    checkComandos(
        respostaCalculos(),
        help(),
        gerarSenha(),
        analisarTexto(),
        embaralharTexto(),
        gerarDestino()
        gerarNomes()
    )
}

function checkComandos(comandos){
    let achouComando = arguments.length

    if(arguments.length > 1) {
        for(var i=0; i<arguments.length; i++){

            if(arguments[i][0]){
               return arguments[i][1]
            }  

            if (!arguments[i]){
                achouComando--

                if(achouComando == 0){
                    return adcElemento('warn','Nenhum comando encontrado. Experimenta escrever "help"')
                }
            }
        }
    }
}