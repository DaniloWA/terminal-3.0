import { getInputValue } from "../getDados/getDados.js"
import { regexGerarSenha } from "../regex/regex.js"
import { random } from "../random/random.js"
import { adcElemento } from "../adcElement/adcElement.js"

export function gerarSenha() {
    let dados = getInputValue()

    let numeros = "0123456789"
    let letras = "abcdefghijklmnopqrstuvwxyz"
    let caracteresEspeciais = "!@#$%^&*()+?><:{}[]"

    let password = ''
    let statusCode = 'green'

    class RandomParam  {
      password = ''
      randomParametro = []

      constructor(comSem, vezes) {
        this._comSem = comSem;
        this._vezes = vezes;
      }

      randomParametroF(){
        for(let i = 0; i < this._vezes; i++){
          this.randomF(this._comSem)
          this.password += this.randomParametro[random(4,0)]
        }
        console.log(this.randomParametro[3])
        return this.password
      }

      randomF(comSem){
        if(comSem == "com"){
          return[
            this.rNumero(),
            this.rString(),
            this.rStringM(),
            this.rCaracteres()
          ]
        } else {
          return[
            this.rNumero(),
            this.rString(),
            this.rStringM(),
          ]
        }

      } 

      rNumero(){
        return this.randomParametro[0] = numeros[random(10,0)]
      }

      rString(){
        return this.randomParametro[1]= letras[random(26,0)]
      }

      rStringM(){
        return this.randomParametro[2] = letras.toUpperCase()[random(26,0)]
      }

      rCaracteres(){
        return this.randomParametro[3] = caracteresEspeciais[random(19,0)]
      }

    }

    if(regexGerarSenha().exec(dados)){
      let vezes = regexGerarSenha().exec(dados)[1]
      let comSem = regexGerarSenha().exec(dados)[2]

      let novaSenha = new RandomParam(comSem, vezes)
      let password = novaSenha.randomParametroF()
      
      if(comSem == undefined || vezes == undefined){
        statusCode = 'error'
        password = "Experimente assim : gerar senha (n) (com ou sem) caracteres especiais"
      }

      adcElemento(statusCode,password)
    }
  }

