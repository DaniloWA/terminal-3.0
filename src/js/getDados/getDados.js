const inputText = document.querySelector('#input_text')
export const displayDiv = document.querySelector('#display')


inputText.addEventListener('keydown', (e) => {
    if(e.key == "Enter"){
        console.log(getInputValue())
    }
})

export function getInputValue(){
    return inputText.value.toString().toLowerCase()
}


