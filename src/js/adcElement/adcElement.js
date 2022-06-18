import { getHora } from "../getHora/getHora.js";
import { getInputValue, displayDiv } from "../getDados/getDados.js";

export function adcElemento(exec,txt){
    let dados = getInputValue()
    let linha = document.createElement("p")
    let horaSpan = document.createElement("span")

    if(exec){
        horaSpan.className = 'time_text' 
        horaSpan.textContent = getHora() +': '

        linha.className = 'row green_text'
        linha.appendChild(horaSpan)
        linha.innerHTML += `${txt}`

        return displayDiv.appendChild(linha)
    }
    else {
        return
    }
}

adcElemento('teste','teste')
