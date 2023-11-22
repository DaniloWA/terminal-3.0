import {
  jogoCopoRG,
  jogosGames,
  A_RG,
  B_RG,
  C_RG,
  close_RG,
} from "../../regex/jogos.js";
import { getInputValue } from "../../getDados/getDados.js";
import { adcElemento } from "../../adcElement/adcElement.js";
import { random } from "../../random/random.js";

const timeout = async (ms) => new Promise((res) => setTimeout(res, ms));

let jogando = false;
let jogada = false;
let play = false;
let dica = true;

export function jogoCopo() {
  let dados = getInputValue();
  if (dados.length == 0) return false;

  let string = "";
  let statusCode = "green";

  if (close_RG().exec(dados) && play == true) {
    return [true, closeGame()];
  }

  if (jogoCopoRG().exec(dados)) {
    play = true;
  }

  if (jogosGames().exec(dados) && !jogoCopoRG().exec(dados)) {
    adcElemento("error", "Error: Falta de parametros");
    string = "Experimenta: jogos list ou games list";
    statusCode = "info";
    return [true, adcElemento(statusCode, string)];
  }

  if (
    jogoCopoRG().exec(dados) ||
    A_RG().exec(dados) ||
    B_RG().exec(dados) ||
    (C_RG().exec(dados) && jogando)
  ) {
    return [true, gameStart(dados)];
  }

  if (jogando) {
    string = 'Jogo do Copo em execução! "@close" para fechar o jogo';
    statusCode = "info";
    return [true, adcElemento(statusCode, string)];
  }

  return false;
}

function gameStart(dados) {
  jogando = true;
  if (play) {
    if (dica) {
      adcElemento("info", "Bem vindo ao jogo do Copo!");
      adcElemento("info", "Escolha em qual copo a bola está");
      adcElemento("info", "[A]-[B]-[C] | basta digitar @A - @B - @C");
      adcElemento(
        "warn",
        '"@close" para fechar o jogo! Antes disso o jogo continua rodando por 1 minuto!'
      );
      dica = false;
    } else {
      adcElemento("info", "Jogar novamente ? basta digitar @A - @B - @C");
    }

    esperarJogada();

    let win = coposRandom();

    if (A_RG().exec(dados)) {
      if (checkWin("A", win)) {
        return returnWinLose(dados, win, true);
      } else {
        return returnWinLose(dados, win, false);
      }
    }

    if (B_RG().exec(dados)) {
      if (checkWin("B", win)) {
        return returnWinLose(dados, win, true);
      } else {
        return returnWinLose(dados, win, false);
      }
    }

    if (C_RG().exec(dados)) {
      if (checkWin("c", win)) {
        return returnWinLose(dados, win, true);
      } else {
        return returnWinLose(dados, win, false);
      }
    }
  }
}

function coposRandom() {
  const copos = ["A", "B", "C"];
  return copos[random(3, 0)];
}

function checkWin(input, copoWin) {
  jogada = true;
  if (input == copoWin) {
    return true;
  } else {
    return false;
  }
}

function returnWinLose(input, copo, win) {
  const jogadas = ["A", "B", "C"];
  let copoInput = "";

  jogadas.forEach((jogada) => {
    console.log(input[1].toUpperCase());
    jogada == input[1].toUpperCase() ? (copoInput = jogada) : "";
  });

  if (win) {
    adcElemento("win", "Parabéns você venceu!!!");
    adcElemento("green", `Jogador: ${copoInput}. Certa: ${copo}`);
  }

  if (!win) {
    adcElemento("lose", "Derrota... Você perdeu!!!");
    adcElemento("green", `Jogador: ${copoInput}. Certa: ${copo}`);
  }
}

function closeGame() {
  play = false;
  jogando = false;
  jogada = true;
  dica = true;
  return adcElemento("warn", "Jogo Finalizado! [Jogo Copo]");
}

async function esperarJogada() {
  let closeTime = "";

  if (jogada == false) {
    closeTime = setTimeout(function () {
      adcElemento("warn", "Demorou mais de 1 minuto para jogar.", true);
      closeGame();
    }, 60000);

    while (jogada === false) {
      await timeout(50);
    }
  }

  clearTimeout(closeTime);
  jogada = false;
}
