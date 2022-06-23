// jogos games 
export function jogosGames() {
    let regExp = /^(jogos?|games?)\s?/i
    return regExp
}

export function jogoCopoRG() {
    let regExp = /^(games?|jogos?)\s?(do)?\s?copo\s?/i
    return regExp
}

export function A_RG() {
    let regExp = /@a/i
    return regExp
}

export function B_RG() {
    let regExp = /@b/i
    return regExp
}

export function C_RG() {
    let regExp = /@c/i
    return regExp
}

export function close_RG() {
    let regExp = /@close/i
    return regExp
}