import { getInputValue, inputText } from "./getDados/getDados.js";
import { adcElemento } from "./adcElement/adcElement.js";
import { comandos } from "./checkComandos/checkComandos.js";

const focusResponse = () => {
  const lastRow = document.querySelector(".row:last-child");
  if (lastRow) {
    lastRow.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }
};

const commandHistory = [];
let historyIndex = -1;

const updateInputFromHistory = () => {
  if (historyIndex >= 0 && historyIndex < commandHistory.length) {
    inputText.value = commandHistory[historyIndex];
  }
};

inputText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const inputValue = getInputValue();

    if (inputValue.trim() !== "") {
      commandHistory.push(inputValue);
      historyIndex = commandHistory.length;
    }

    adcElemento("user", getInputValue());
    comandos();
    inputText.value = "";
    setTimeout(() => {
      focusResponse();
    }, 100);
  }

  if (e.key === "ArrowUp" && historyIndex > 0) {
    historyIndex--;
    updateInputFromHistory();
    e.preventDefault();
  }

  if (e.key === "ArrowDown" && historyIndex < commandHistory.length - 1) {
    historyIndex++;
    updateInputFromHistory();
    e.preventDefault();
  }
});
