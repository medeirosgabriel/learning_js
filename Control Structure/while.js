function getRandomInteger(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = 0

while (option != -1) {
    option = getRandomInteger(-1, 10)
    console.log(`Chosen option = ${option}.`)
}

console.log("See you later!")