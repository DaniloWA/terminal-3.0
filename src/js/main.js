import * as calculadora from "./calculadora/calculadora.js"
import * as getDados from "./getDados/getDados.js"
import * as getHora from "./getHora/getHora.js"
import * as adcElement from "./adcElement/adcElement.js"
import * as help from "./help/help.js"

getDados.inputText.addEventListener('keydown', (e) => {
    if(e.key == "Enter"){
        start()
    }
})

function start(){
    adcElement.adcElemento('green',getDados.getInputValue())
    calculadora.respostaCalculos()
    help.help()
}