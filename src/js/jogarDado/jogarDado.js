import { getInputValue } from "../getDados/getDados.js";
import { jogarDado as jogarDadoRG } from "../regex/regex.js";
import { adcElemento } from "../adcElement/adcElement.js";
import { random } from "../random/random.js";

export function jogarDado() {
  let dados = getInputValue();
  if (dados.length == 0) return false;

  let string = "";
  let statusCode = "";

  if (jogarDadoRG().exec(dados)) {
    const randomDado = random(6, 1);

    string = `Dado numero: ${randomDado}`;
    statusCode = "green";

    return [true, adcElemento(statusCode, string)];
  }

  return false;
}
