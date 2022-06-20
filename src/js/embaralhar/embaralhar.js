import { getInputValue } from "../getDados/getDados.js"
import { regexEmbaralharTexto } from "../regex/regex.js"
import { adcElemento } from "../adcElement/adcElement.js"

export function embaralharTexto(){
    let dados = getInputValue()

    let dadosLimpos = ''
    let string = ''
    let statusCode = 'green'

    if(regexEmbaralharTexto().exec(dados)){
        if(regexEmbaralharTexto().exec(dados).input.length <= 17){

            string =`Experimenta: Embaralhar texto [seu texto]` 
            statusCode = 'info'
            adcElemento('error','Error: Falta de parametros')
            
        } else {

            dadosLimpos = dados.replace(regexEmbaralharTexto(), '' )
            string = dadosLimpos.split('').sort(function(){return 0.5-Math.random()}).join('');
            
        }
        return[true, adcElemento(statusCode,string)]
    } else {
        return false
    }
 
}

