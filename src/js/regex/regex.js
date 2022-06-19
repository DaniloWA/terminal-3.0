export function calculadoraRG(){
    let regExp = /(\d+) (mais|\+|\-|\*|\/|menos|dividido|por|vezes) (\d+)/i
    return regExp
}

export function regexGerarSenha() {
    let regExp = /gerar senhas?\s?(\d+)?\s?(com|sem)?/i
    return regExp
}