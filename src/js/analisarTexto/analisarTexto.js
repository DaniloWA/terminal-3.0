import { getInputValue } from "../getDados/getDados.js"
import { analisarTxt, contaPalavras, contaCaracteres } from "../regex/regex.js"
import { adcElemento } from "../adcElement/adcElement.js"

export function analisarTexto(){
    let dados = getInputValue()
    if(dados.length == 0) return false
    
    let string =''
    let statusCode = ''

    if(analisarTxt().exec(dados)){
        if(analisarTxt().exec(dados).input.length < 15){
            string =`Experimenta: Analisar texto [seu texto]` 
            statusCode = 'info'
            adcElemento('error','Error: Falta de parametros')
        } else {

            let numPalavras = dados.match(contaPalavras()).length -1 // o -1 elimina o Analisar texto da equação
            let numCaracteres = dados.match(contaCaracteres()).length -13 // o -13 elimina o Analisar texto da equação

            string =`Palavras: ${numPalavras} Letras: ${numCaracteres}` 
            statusCode = 'green'
        }

        return [true, adcElemento(statusCode,string)]
    } else {
        return false
    }
}