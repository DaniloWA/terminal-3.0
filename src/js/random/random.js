export function random(max,min) {
    let random = Math.random() * (max - min) + min;
    let randomInt = parseInt(random)
    return randomInt
}
