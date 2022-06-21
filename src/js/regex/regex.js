// Calculadora
export function calculadoraRG(){
    let regExp = /(\d+) (mais|\+|\-|\*|\/|menos|dividido|por|vezes) (\d+)/i
    return regExp
}

// Senha
export function regexGerarSenha() {
    let regExp = /gerar senhas?\s?(\d+)?\s?(com|sem)?/i
    return regExp
}

// Analisador de texto
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

// Embaralhar o texto
export function regexEmbaralharTexto() {
    let regExp = /embaralhar texto/i
    return regExp
}

// Gerar destino
export function regexGerarDestino() {
    let regExp = /gerar destino/i
    return regExp
    }

// Gerar nomes
export function regexGerarNomes() {
    let regExp = /gerar nomes?\s?(masculinos?|femininos?)?\s?(\d+)?/i
    return regExp
}

// gerar emails
export function regexGerarEmail() {
    let regExp = /gerar email/i
    return regExp
}

export function regexLimparEmail(){
    let regExp1 = /\s?/ig
    return regExp1
}

