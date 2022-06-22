import { getInputValue,inputText } from "./getDados/getDados.js"
import { adcElemento } from "./adcElement/adcElement.js"
import { comandos } from "./checkComandos/checkComandos.js"

inputText.addEventListener('keydown', (e) => {
    if(e.key == "Enter"){
        adcElemento('user',getInputValue())
        comandos()
    }
})

