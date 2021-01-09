const countCharacters = (character, phrase) => {
    let count = 0
    for (let i = 0; i < phrase.length; i++) {
        count += (phrase[i] == character) ? 1 : 0
    }
    return count
}

console.log(countCharacters("r", "Gabriel Paiva Medeiros"))