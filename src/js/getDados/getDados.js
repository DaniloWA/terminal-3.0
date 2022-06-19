export const inputText = document.querySelector('#input_text')
export const displayDiv = document.querySelector('#display')

export function getInputValue(){
    return inputText.value.toString().toLowerCase()
}


