import { respostaCalculos } from "./calculadora/calculadora.js"
import { getInputValue,inputText } from "./getDados/getDados.js"
import { adcElemento } from "./adcElement/adcElement.js"
import { help } from "./help/help.js"
import { gerarSenha } from "./gerarSenha/gerarSenha.js"
import { analisarTexto } from "./analisarTexto/analisarTexto.js"
import { embaralharTexto } from "./embaralhar/embaralhar.js"

inputText.addEventListener('keydown', (e) => {
    if(e.key == "Enter"){
        adcElemento('user',getInputValue())
        checkComandos()
    }
})

function checkComandos(){
    respostaCalculos()
    help()
    gerarSenha()
    analisarTexto()
    embaralharTexto()
}