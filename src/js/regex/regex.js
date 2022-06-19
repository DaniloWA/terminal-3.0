// expressão regular para Calculadora
export function calculadoraRG(){
    let regExp = /(\d+) (mais|\+|\-|\*|\/|menos|dividido|por|vezes) (\d+)/i
    return regExp
}

// expressão regular para Senha
export function regexGerarSenha() {
    let regExp = /gerar senhas?\s?(\d+)?\s?(com|sem)?/i
    return regExp
}

// expressão regular para Analisador de texto
export function analisarTxt() {
    let regExp = /^analisar texto/i
    return regExp
}

export function contaPalavras() {
    let regExp = /\s+/ig
    return regExp
}

export function contaCaracteres() {
    let regExp = /\w/ig
    return regExp
}
