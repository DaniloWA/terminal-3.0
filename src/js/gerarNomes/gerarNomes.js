import { getInputValue } from "../getDados/getDados.js"
import { regexGerarNomes } from "../regex/regex.js"
import { nomes, nomesMasculinos, nomesFemininos } from "./nomes.js"
import { adcElemento } from "../adcElement/adcElement.js"
import { random } from "../random/random.js"

export function gerarNomes(){
    let dados = getInputValue()
    if(dados.length == 0) return false
    
    let string =''
    let statusCode = 'green'

    let genero = ""
    let vezes = 1

    if(regexGerarNomes().exec(dados)){

        if(regexGerarNomes().exec(dados)[1]?.includes("masculino") || regexGerarNomes().exec(dados)[1]?.includes("feminino")){
            genero = regexGerarNomes().exec(dados)[1]
        } else {
            genero = ''
        }
        if(regexGerarNomes().exec(dados)[2]){
            vezes = +regexGerarNomes().exec(dados)[2]
        }
        if( vezes > 20 ){
            
            string = 'Experimenta: Gerar nomes (genero) (quantidade | Max:20)'
            statusCode = 'info' 
            adcElemento('error','Error: Número máximo excedido! (20)')

        } else {
            if(genero == "masculino" || genero == "masculinos"){
                if(vezes > 1){
                    for (let index = 0; index < vezes; index++) {
                        string += ' - ' + nomesMasculinos[random(9,0)] 
                    }
                } else {
                    string = nomesMasculinos[random(9,0)] 
                }
            }
        
            if(genero == "feminino" || genero == "femininos"){
                if(vezes > 1){
                    for (let index = 0; index < vezes; index++) {
                        string += ' - ' + nomesFemininos[random(9,0)] 
                    }
                } else {
                    string = nomesFemininos[random(9,0)] 
                }
            }
        
            if(regexGerarNomes().exec(dados)[1] == undefined && regexGerarNomes().exec(dados)[2] == undefined ) {
                string = nomes[random(19,0)] 
            }

            if(regexGerarNomes().exec(dados)[1] == undefined && regexGerarNomes().exec(dados)[2]) {
                if(vezes > 1){
                    for (let index = 0; index < vezes; index++) {
                        string += ' - ' + nomes[random(19,0)]
                    }
                } 
            }
        }
        return [true, adcElemento(statusCode,string)]

    } else {
        return false
    }
}