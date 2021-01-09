function getRandomInteger(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = -1

// Runs and then checks

do {
    option = getRandomInteger(-1, 10)
    console.log(`Chosen option = ${option}.`)
} while (option != -1)

console.log("See you later!")