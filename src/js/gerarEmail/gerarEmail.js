import { getInputValue } from "../getDados/getDados.js";
import { regexGerarEmail, regexLimparEmail } from "../regex/regex.js";
import { adcElemento } from "../adcElement/adcElement.js";
import { email } from "./email.js";
import { nomes } from "../gerarNomes/nomes.js";
import { random } from "../random/random.js";

export function gerarEmail() {
  let dados = getInputValue();
  if (dados.length == 0) return false;

  let string = "";
  let statusCode = "green";

  if (regexGerarEmail().exec(dados)) {
    string =
      nomes[[random(19, 0)]].replace(regexLimparEmail(), "") +
      email[random(4, 0)];

    return [true, adcElemento(statusCode, string)];
  }

  return false;
}
