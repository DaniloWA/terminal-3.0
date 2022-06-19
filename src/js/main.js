import * as calculadora from "./calculadora/calculadora.js"
import * as getDados from "./getDados/getDados.js"
import * as getHora from "./getHora/getHora.js"
import * as add from "./adcElement/adcElement.js"
import * as help from "./help/help.js"
import * as senha from "./gerarSenha/gerarSenha.js"

getDados.inputText.addEventListener('keydown', (e) => {
    if(e.key == "Enter"){
        checkComandos()
    }
})

function checkComandos(){
    add.adcElemento('user',getDados.getInputValue())
    calculadora.respostaCalculos()
    help.help()
    senha.gerarSenha()
}