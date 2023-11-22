import { getInputValue } from "../getDados/getDados.js";
import { morseRG } from "../regex/regex.js";
import { adcElemento } from "../adcElement/adcElement.js";

export function morse() {
  let dados = getInputValue();
  if (dados.length == 0) return false;

  let string = "";
  let statusCode = "";

  const match = morseRG().exec(dados);
  if (match) {
    if (match[1] == undefined) {
      console.log(match);
      string = `Experimenta: Morse [texto]`;
      statusCode = "warn";
      return [true, adcElemento(statusCode, string)];
    }

    const textToConvert = match.input.replace(/^morse/g, "");
    const morseCode = convertTextToMorse(textToConvert);

    string = `Texto morse: ${morseCode}`;
    statusCode = "green";

    return [true, adcElemento(statusCode, string)];
  }

  return false;
}

function convertTextToMorse(text) {
  const morseCodeMap = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    _: "..--.-",
    '"': ".-..-.",
    $: "...-..-",
    "@": ".--.-.",
  };

  const words = text.toUpperCase().split(" ");

  const morseCodeArray = words.map((word) =>
    word
      .split("")
      .map((char) => morseCodeMap[char] || "")
      .join(" ")
  );

  return morseCodeArray.join("   ");
}
