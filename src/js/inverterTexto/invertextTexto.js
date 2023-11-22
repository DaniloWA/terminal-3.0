import { getInputValue } from "../getDados/getDados.js";
import { regexInverterTexto } from "../regex/regex.js";
import { adcElemento } from "../adcElement/adcElement.js";

export function inverterTexto() {
  let dados = getInputValue();
  if (dados.length == 0) return false;

  let statusCode = "green";

  if (regexInverterTexto().exec(dados)) {
    return [true, adcElemento(statusCode, reverse(dados))];
  }

  return false;
}

function reverse(texto) {
  let textoInvertido = "";
  let tamanhoComando = 14;

  for (let i = texto.length - 1; i >= tamanhoComando; i--) {
    textoInvertido += texto[i];
  }

  return textoInvertido;
}
