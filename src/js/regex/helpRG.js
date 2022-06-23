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

function rgHelpClean(){
    let regExp = /^Help clean/i
    return regExp
}
function rgHelpJogos(){
    let regExp = /^Help Jogos/i
    return regExp
}

export function checkRegex(dados){
    if(rgHelpList().exec(dados)) 
        return 'Comandos! "(_)": Parametro Opcional, "[_]": Parametro Obrigatorio, "|": ou  <br> '
         + 'Help Jogos <br>'
         + 'Help clean <br>'
         + 'Help Analisar <br>'
         + 'Help Calculadora <br> '
         + 'Help Embaralhar <br>'
         + 'Help Destino <br>'
         + 'Help Email <br> '
         + 'Help Nomes <br> '
         + 'Help Numeros <br> '
         + 'Help Senha <br>'
         + 'Help Inverter <br>'

    if(rgHelpAnalisar().exec(dados)) 
        return 'Escreva "Analisar texto [seu texto]" e ira retorna o numero de palavras e de letras do texto.'

    if(rgHelpCacluladora().exec(dados))
        return 'Faça contas simples com "[+, -, *, /]" ou "[Mais, menos, vezes, dividir,dividir por]" ex : 1 mais 2. ira retornar o resultado.'

    if(rgHelpEmbaralhar().exec(dados))
        return 'Escreva "Embaralhar texto [seu texto]" e ira retorna o texto embaralhado aleatoriamente.'

    if(rgHelpDestino().exec(dados))
        return 'Escreva "Gerar destino" e ira retornar um pais aleatorio'

    if(rgHelpEmail().exec(dados))
        return 'Escreva "Gerar email" e ira retornar um email aleatorio'

    if(rgHelpNomes().exec(dados))
        return 'Escreva "Gerar nomes (masculino/feminino) " ira retornar um nome aleatorio'

    if(rgHelpNumeros().exec(dados))
        return 'Escreva "gerar numero (brasilero|brasil) ou (espanhol|espanha) ou (portugues|portugal)_" e ira retornar um numero aleatorio'

    if(rgHelpSenha().exec(dados))
        return 'Escreva "Gerar senha [numero de digitos] (com ou sem)" e ira gerar uma senha aleatoria com ou sem caracteres especiais'

    if(rgHelpTexto().exec(dados))
        return 'Escreva "Inverter texto [seu texto]" e ira inverter todo o texto digitado'

    if(rgHelpClean().exec(dados))
        return 'Escreva "clean|clear|cls" e ira limpar o terminal'

    if(rgHelpJogos().exec(dados))
        return 'jogos: <br> '
        + 'Escreva: jogo (do) copo'

    if(regexHelp().exec(dados))
        return 'Bem vindo ao Help! Digite "Help list"'


}