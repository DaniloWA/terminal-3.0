import { getInputValue } from "../getDados/getDados.js";
import {
  regexGerarNumeroTelefone,
  regexVirgula,
  numeroPortugues,
  numeroBraziliero,
  numeroEspanhol,
} from "../regex/regex.js";
import { random } from "../random/random.js";
import { adcElemento } from "../adcElement/adcElement.js";

let info = false;

export function gerarNumeroTell() {
  let dados = getInputValue();
  if (dados.length == 0) return false;

  let string = "";
  let statusCode = "green";
  let indicativo = "";

  if (regexGerarNumeroTelefone().exec(dados)) {
    if (!info) {
      info = true;
      adcElemento(
        "info",
        "Experimenta: gerar numero (brasilero|brasil) ou (espanhol|espanha) ou (portugues|portugal)"
      );
    }
    let numeroTelefone1 = [];
    let numeroTelefone2 = [];
    let numeroTelefone3 = [];

    if (numeroBraziliero().exec(dados)) {
      indicativo = "(+55) ";
    }

    if (numeroPortugues().exec(dados)) {
      indicativo = "(+351) ";
    }

    if (numeroEspanhol().exec(dados)) {
      indicativo = "(+34) ";
    }

    for (let i = 0; i < 3; i++) {
      numeroTelefone1.push(random(9, 6));
      numeroTelefone3.push(random(9, 0));
      numeroTelefone2.push(random(9, 0));
    }

    let txt1 = numeroTelefone1.toString();
    let txt2 = numeroTelefone2.toString();
    let txt3 = numeroTelefone3.toString();

    let numeroTratado1 = txt1.replace(regexVirgula(), "");
    let numeroTratado2 = txt2.replace(regexVirgula(), "");
    let numeroTratado3 = txt3.replace(regexVirgula(), "");

    string =
      indicativo + numeroTratado1 + "-" + numeroTratado2 + "-" + numeroTratado3;

    return [true, adcElemento(statusCode, string)];
  }

  return false;
}
