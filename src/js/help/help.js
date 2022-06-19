import { getInputValue } from '../getDados/getDados.js'
import { adcElemento } from "../adcElement/adcElement.js"
import * as rg from "../regex/helpRG.js"

export function help(){
    let dados = getInputValue()
    if(!dados){ return }
    if(rg.checkRegex(dados)){
        adcElemento('green', rg.checkRegex(dados))
    }
}


