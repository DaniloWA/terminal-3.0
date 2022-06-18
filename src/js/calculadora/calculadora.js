import { calculadoraRG } from '../regex/regex.js'
import { getInputValue } from '../getDados/getDados.js'
import { adcElemento } from "../adcElement/adcElement.js"

function operadoresIA(operadoresTxt) {
    let dado = operadoresTxt
    let operador = 0

    if(dado == "mais" || dado == "+"){
         return operador = 1
    }

    if(dado == "menos" || dado == "-"){
         return operador = 2
    }

    if(dado == "dividir" || dado == "/" || dado == "por"){
         return operador = 3
    }

    if(dado == "vezes" || dado == "*"){
         return operador = 4
    } 

}

function calculos (n1, n2, operador) {
    let num1 = Number(n1)
    let num2 = Number(n2)
    
    let resultado
    switch (operador) {
         case 1:
              resultado = num1 + num2
              return resultado
         case 2:
              resultado = num1 - num2
              return resultado
         case 3:
              resultado = num1 / num2
              return resultado
         case 4:
              resultado = num1 * num2
              return resultado
    }

}

export function respostaCalculos(){
    let dados = getInputValue()
    let dadosCalculadorRG = calculadoraRG()
    let respostaFinal = ''

   if(dadosCalculadorRG.exec(dados)){
        let num1 = dadosCalculadorRG.exec(dados)[1]
        let num2 = dadosCalculadorRG.exec(dados)[3]
        let operadore = dadosCalculadorRG.exec(dados)[2]

        respostaFinal = calculos(num1,num2,operadoresIA(operadore))

        return adcElemento('green',respostaFinal)
   } else {
    return
   }
}