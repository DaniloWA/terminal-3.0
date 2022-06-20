import { getInputValue } from '../getDados/getDados.js'
import { adcElemento } from "../adcElement/adcElement.js"
import { checkRegex } from "../regex/helpRG.js"

export function help(){
    let dados = getInputValue()
    if(dados.length == 0) return false

    if(checkRegex(dados)){
        return [true, adcElemento('green', checkRegex(dados))]
    } else {
        return false
    }
}


