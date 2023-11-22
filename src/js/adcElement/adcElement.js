import { getHora } from "../getHora/getHora.js";
import { getInputValue, displayDiv } from "../getDados/getDados.js";

export function adcElemento(status, txt, comando) {
  const dados = getInputValue();
  const linha = document.createElement("p");
  const horaSpan = document.createElement("span");
  const statusCode = ["lose", "win", "info", "user", "green", "error", "warn"];

  horaSpan.className = "time_text";
  horaSpan.textContent = getHora() + ": ";

  if (!(dados.length === 0) || comando) {
    if (statusCode.includes(status)) {
      linha.className = `row ${status}_text`;
    }
    linha.appendChild(horaSpan);
    linha.innerHTML += `${txt}`;
  } else if (!comando) {
    linha.className = `row warn_text`;
    linha.appendChild(horaSpan);
    linha.innerHTML += "Perdido ? escreva 'help' no terminal";
  }

  return displayDiv.appendChild(linha);
}
