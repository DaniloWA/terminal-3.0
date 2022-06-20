import { getHora } from "../getHora/getHora.js";
import { getInputValue, displayDiv } from "../getDados/getDados.js";

export function adcElemento(status,txt,comando){
    let dados = getInputValue()

    let linha = document.createElement("p")
    let horaSpan = document.createElement("span")
    let statusCode = ['info','user','green','error','warn']

    if(!dados.length == 0 || comando){
        horaSpan.className = 'time_text' 
        horaSpan.textContent = getHora() +': '

        statusCode.forEach(stcode => {
            if(stcode == status){
                linha.className = `row ${status}_text`
                
            }
        });
        
        linha.appendChild(horaSpan)
        linha.innerHTML += `${txt}`

        return displayDiv.appendChild(linha)

    } else if (!comando){
        horaSpan.className = 'time_text' 
        horaSpan.textContent = getHora() +': '


        linha.className = `row warn_text`   
        linha.appendChild(horaSpan)
        linha.innerHTML += "Perdido ? escreva 'help' no terminal"
        
        return displayDiv.appendChild(linha)
    }
    
}

