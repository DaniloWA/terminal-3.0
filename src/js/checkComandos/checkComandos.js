import { help } from "../help/help.js";
import { gerarSenha } from "../gerarSenha/gerarSenha.js";
import { analisarTexto } from "../analisarTexto/analisarTexto.js";
import { embaralharTexto } from "../embaralhar/embaralhar.js";
import { respostaCalculos } from "../calculadora/calculadora.js";
import { adcElemento } from "../adcElement/adcElement.js";
import { getInputValue } from "../getDados/getDados.js";
import { gerarDestino } from "../gerarDestinos/gerarDestinos.js";
import { gerarNomes } from "../gerarNomes/gerarNomes.js";
import { gerarEmail } from "../gerarEmail/gerarEmail.js";
import { inverterTexto } from "../inverterTexto/invertextTexto.js";
import { gerarNumeroTell } from "../gerarNumeroTell/gerarNumeroTell.js";
import { jogoCopo } from "../jogos/jogoCopo/jogoCopo.js";
import { cleanTerminal } from "../clean/clean.js";
import { jogarDado } from "../jogarDado/jogarDado.js";
import { cronometro } from "../cronometro/cronometro.js";
import { morse } from "../morse/morse.js";

export function comandos() {
  let dados = getInputValue();
  if (dados.length == 0) return false;

  checkComandos(
    respostaCalculos(),
    help(),
    gerarSenha(),
    analisarTexto(),
    embaralharTexto(),
    gerarDestino(),
    gerarNomes(),
    gerarEmail(),
    inverterTexto(),
    gerarNumeroTell(),
    cleanTerminal(),
    jogoCopo(),
    jogarDado(),
    cronometro(),
    morse()
  );
}

function checkComandos(comandos) {
  let achouComando = arguments.length;

  if (arguments.length > 1) {
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i][0]) {
        return arguments[i][1];
      }

      if (!arguments[i]) {
        achouComando--;

        if (achouComando == 0) {
          return adcElemento(
            "warn",
            'Nenhum comando encontrado. Experimenta escrever "help"'
          );
        }
      }
    }
  }
}
