const inputText = document.querySelector('#input_text')
const displayDiv = document.querySelector('#display')


inputText.addEventListener('keydown', (e) => {
    if(e.key == "Enter"){
        console.log(getInputValue())
    }
})

function getInputValue(){
    return inputText.value.toString().toLowerCase()
}


