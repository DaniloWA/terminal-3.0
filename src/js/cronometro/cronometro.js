import { getInputValue } from "../getDados/getDados.js";
import { timerCronometro } from "../regex/regex.js";
import { adcElemento } from "../adcElement/adcElement.js";

export function cronometro() {
  let dados = getInputValue();
  if (dados.length == 0) return false;

  let string = "";
  let statusCode = "";

  let match = timerCronometro().exec(dados);
  if (match) {
    if (match[2] == undefined || isNaN(Number(match[2]))) {
      string = `Experimenta: cronometro|timer [numero]`;
      statusCode = "warn";
      return [true, adcElemento(statusCode, string)];
    }

    string = `Em desenvolvimento!`;
    statusCode = "info";
    return [true, adcElemento(statusCode, string)];

    let minutos = Number(match[2]);
    let segundos = minutos * 60;

    string = `Cronometro: ${minutos} minuto${
      minutos > 1 ? "s" : ""
    } (${segundos} segundos)`;
    statusCode = "green";

    let contador = setInterval(() => {
      segundos--;
      if (segundos < 0) {
        clearInterval(contador);
        return;
      }

      let minutosRestantes = Math.floor(segundos / 60);
      let segundosRestantes = segundos % 60;

      let stringAtualizada = `Cronometro: ${minutosRestantes} minutos ${segundosRestantes} segundos`;
      return [true, adcElemento(statusCode, stringAtualizada)];
    }, 1000);

    return [true, adcElemento(statusCode, string)];
  }

  return false;
}
