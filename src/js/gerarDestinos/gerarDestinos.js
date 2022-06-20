import { getInputValue } from "../getDados/getDados.js"
import { adcElemento } from "../adcElement/adcElement.js"
import { regexGerarDestino } from "../regex/regex.js"
import { destinos } from "./destinos.js";
import { random } from "../random/random.js"


export function gerarDestino(){
    let dados = getInputValue()
    if(dados.length == 0) return false

    let string =''
    let statusCode = ''
    
    if(regexGerarDestino().exec(dados)){
        string = destinos[random(259,0)]
        statusCode = 'green'

        return [true, adcElemento(statusCode,string)]
    } else {
        return false
    }
}



