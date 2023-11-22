const commands = [
  {
    regExp: /^help list/i,
    response:
      '<br> "(_)": Parametro Opcional <br> "[_]": Parametro Obrigatorio <br> "|": ou  <br> <br> ' +
      "Comandos: <br>" +
      "Help Jogos <br>" +
      "Help Clean <br>" +
      "Help Analisar <br>" +
      "Help Calculadora <br> " +
      "Help Embaralhar <br>" +
      "Help Destino <br>" +
      "Help Email <br> " +
      "Help Nomes <br> " +
      "Help Numeros <br> " +
      "Help Senha <br>" +
      "Help Inverter <br>" +
      "Help Cronometro <br>" +
      "Help Morse <br>" +
      "Help Criptografia <br>" +
      "Help Dado <br>",
  },
  {
    regExp: /^Help cronometro/i,
    response:
      'EM DESENVOLVIMENTO! Escreva "Cronometro|timer [tempo]" e irá iniciar um temporizador para a quantidade especificada de minutos.',
  },
  {
    regExp: /^Help Dado/i,
    response:
      'Escreva "jogar dado" e irá simular o lançamento de um dado, retornando um número aleatório de 1 a 6.',
  },
  {
    regExp: /^Help Morse/i,
    response:
      'Escreva "Morse [texto]" e irá converter o texto para código Morse.',
  },
  {
    regExp: /^Help Sorteio/i,
    response:
      'Escreva "Sorteio [opção1] [opção2] ... [opçãoN]" e irá sortear uma das opções.',
  },
  {
    regExp: /^Help Criptografia/i,
    response:
      'Escreva "Criptografar [chave: 1] [mensagem]" e irá criptografar a mensagem usando a chave especificada. O valor da chave deve ser um número de 0 a 9.',
  },
  {
    regExp: /^Help Codigo Binario/i,
    response:
      'Escreva "Codigo Binario [texto]" e irá converter o texto para código binário.',
  },
  {
    regExp: /^Help Analisar/i,
    response:
      'Escreva "Analisar texto [seu texto]" e ira retorna o numero de palavras e de letras do texto.',
  },
  {
    regExp: /^Help Calculadora/i,
    response:
      'Faça contas simples com "[+, -, *, /]" ou "[Mais, menos, vezes, dividir,dividir por]" ex : 1 mais 2. ira retornar o resultado.',
  },
  {
    regExp: /^Help Embaralhar/i,
    response:
      'Escreva "Embaralhar texto [seu texto]" e ira retorna o texto embaralhado aleatoriamente.',
  },
  {
    regExp: /^Help Destino/i,
    response: 'Escreva "Gerar destino" e ira retornar um pais aleatorio',
  },
  {
    regExp: /^Help Email/i,
    response: 'Escreva "Gerar email" e ira retornar um email aleatorio',
  },
  {
    regExp: /^Help Nomes/i,
    response:
      'Escreva "Gerar nomes (masculino/feminino) (quantidade) " ira retornar um nome aleatorio',
  },
  {
    regExp: /^Help numeros/i,
    response:
      'Escreva "gerar numero (brasileiro|brasil) ou (espanhol|espanha) ou (portugues|portugal)_" e ira retornar um numero aleatorio',
  },
  {
    regExp: /^Help senha/i,
    response:
      'Escreva "Gerar senha [numero de digitos] (com ou sem)" e ira gerar uma senha aleatoria com ou sem caracteres especiais',
  },
  {
    regExp: /^Help inverter/i,
    response:
      'Escreva "Inverter texto [seu texto]" e ira inverter todo o texto digitado',
  },
  {
    regExp: /^Help clean/i,
    response: 'Escreva "clean|clear|cls" e ira limpar o terminal',
  },
  {
    regExp: /^Help Jogos/i,
    response: "jogos: <br> " + "Escreva: jogo (do) copo",
  },
  { regExp: /^help/i, response: 'Bem vindo ao Help! Digite "Help list"' },
];

export function checkRegex(dados) {
  for (let command of commands) {
    if (command.regExp.exec(dados)) {
      return command.response;
    }
  }
}
