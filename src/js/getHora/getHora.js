function getHora() {
    let data = new Date()
    let hrs = data.getHours()
    let mins = data.getMinutes()

    if(hrs<=9)
       hrs = '0' + hrs
    if(mins<10)
      mins = '0' + mins

    const postTime= hrs + ':' + mins
    
    return postTime
}

console.log(getHora())