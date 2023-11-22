import { getInputValue } from "../getDados/getDados.js";
import { cleanTerminalRG } from "../regex/regex.js";
import { adcElemento } from "../adcElement/adcElement.js";

export function cleanTerminal() {
  let dados = getInputValue();
  if (dados.length == 0) return false;

  let string = "";
  let statusCode = "green";

  if (cleanTerminalRG().exec(dados)) {
    let linhas = document.querySelectorAll(".row");
    if (linhas.length == 1) {
      statusCode = "info";
      string = "Terminal Já se encontra vazio!";
      return [true, adcElemento(statusCode, string)];
    } else {
      linhas.forEach((linha) => {
        linha.remove();
      });
    }
    return [true, true];
  }

  return false;
}
