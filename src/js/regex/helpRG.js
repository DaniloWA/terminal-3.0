 function regexHelp() {
    let regExp = /^help/i
    return regExp
}

 function rgHelpList(){
    let regExp = /^help list/i
    return regExp
}

 function rgHelpAnalisar(){
    let regExp = /^Help Analisar/i
    return regExp
}

 function rgHelpCacluladora(){
    let regExp = /^Help Calculadora/i
    return regExp
}

 function rgHelpEmbaralhar(){
    let regExp = /^Help Embaralhar/i
    return regExp
}

 function rgHelpDestino(){
    let regExp = /^Help Destino/i
    return regExp
}

 function rgHelpEmail(){
    let regExp = /^Help Email/i
    return regExp
}

 function rgHelpNomes(){
    let regExp = /^Help Nomes/i
    return regExp
}

 function rgHelpNumeros(){
    let regExp = /^Help numeros'/i
    return regExp
}

 function rgHelpSenha(){
    let regExp = /^Help senha/i
    return regExp
}

 function rgHelpTexto(){
    let regExp = /^Help inverter/i
    return regExp
}


export function checkRegex(dados){
    if(rgHelpList().exec(dados)) 
        return 'Lista de comandos: ' + 'Help Analisar, ' + 'Help Calculadora, ' + 'Help Embaralhar, ' + 'Help Destino, ' + 'Help Email, ' + 'Help Nomes, ' + 'Help numeros, ' + 'Help senha, ' + 'Help inverter'

    if(rgHelpAnalisar().exec(dados)) 
        return 'Escreva "Analisar texto (texto)" e ira retorna o numero de palavras e de letras.'

    if(rgHelpCacluladora().exec(dados))
        return 'Faça contas simples com "+, -, *, /" ou "Mais, menos, vezes, dividir,dividir por" ex : 1 mais 2. ira retornar o resultado.'

    if(rgHelpEmbaralhar().exec(dados))
        return 'Escreva "Embaralhar texto (texto)" e ira retorna o texto embaralhado aleatoriamente.'

    if(rgHelpDestino().exec(dados))
        return 'Escreva "Gerar destino " e ira retornar um pais aleatorio'

    if(rgHelpEmail().exec(dados))
        return 'Escreva "Gerar email " e ira retornar um email aleatorio'

    if(rgHelpNomes().exec(dados))
        return 'Escreva "Gerar nomes (opcional) masculino/feminino " ira retornar um nome aleatorio'

    if(rgHelpNumeros().exec(dados))
        return 'Escreva "gerar numeros (opcional) portugues " e ira retornar um numero aleatorio'

    if(rgHelpSenha().exec(dados))
        return 'Escreva "Gerar senha (numero de digitos) ((com/sem) caracteres especiais) " e ira gerar uma senha aleatoria '

    if(rgHelpTexto().exec(dados))
        return 'Escreva "Inverter texto (texto)" e ira inverter todo o texto digitado'

    if(regexHelp().exec(dados))
        return 'Bem vindo ao Help! Digite "Help list"'
}