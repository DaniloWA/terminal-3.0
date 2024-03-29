// Calculadora
export function calculadoraRG() {
  let regExp = /(\d+) (mais|\+|\-|\*|\/|menos|dividido|por|vezes) (\d+)/i;
  return regExp;
}

// Senha
export function regexGerarSenha() {
  let regExp = /gerar senhas?\s?(\d+)?\s?(com|sem)?/i;
  return regExp;
}

// Analisador de texto
export function analisarTxt() {
  let regExp = /^analisar texto/i;
  return regExp;
}

export function contaPalavras() {
  let regExp = /\s+/gi;
  return regExp;
}

export function contaCaracteres() {
  let regExp = /\w/gi;
  return regExp;
}

// Embaralhar o texto
export function regexEmbaralharTexto() {
  let regExp = /embaralhar texto/i;
  return regExp;
}

// Gerar destino
export function regexGerarDestino() {
  let regExp = /gerar destino/i;
  return regExp;
}

// Gerar nomes
export function regexGerarNomes() {
  let regExp = /gerar nomes?\s?(masculinos?|femininos?)?\s?(\d+)?/i;
  return regExp;
}

// gerar emails
export function regexGerarEmail() {
  let regExp = /gerar email/i;
  return regExp;
}

export function regexLimparEmail() {
  let regExp1 = /\s?/gi;
  return regExp1;
}

// inverter texto
export function regexInverterTexto() {
  let regExp = /inverter texto/i;
  return regExp;
}

// gerar numeros de telefone
export function regexGerarNumeroTelefone() {
  let regExp = /gerar numero\s?/i;
  return regExp;
}

export function numeroPortugues() {
  let regExp = /gerar numero\s?(portugues|portugal)\s?/i;
  return regExp;
}

export function numeroBraziliero() {
  let regExp = /gerar numero\s?(brasileiro|brasil)\s?/i;
  return regExp;
}

export function numeroEspanhol() {
  let regExp = /gerar numero\s?(espanhol|Espanha)\s?/i;
  return regExp;
}

export function regexVirgula() {
  let regExp1 = /,/gi;
  return regExp1;
}

// Jogar Dado
export function jogarDado() {
  let regExp = /jogar dado/i;
  return regExp;
}

// TimerCronometro
export function timerCronometro() {
  let regExp = /(timer|cronometro) (\d+)?/i;
  return regExp;
}

// Codigo Morse
export function morseRG() {
  let regExp = /morse\s?(\w+)?/i;
  return regExp;
}

// Codigo Morse
export function criptografia() {
  let regExp = /criptografar\s?(\w+)?/i;
  return regExp;
}

// clean Limpar terminal
export function cleanTerminalRG() {
  let regExp = /^(clean|cls|clear)/i;
  return regExp;
}
