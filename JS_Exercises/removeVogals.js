var vogals = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]

const reducer = (accumulator, currentElement) => {
    if (!(vogals.includes(currentElement))) {
        console.log(currentElement)
        return accumulator + currentElement;
    }
    return accumulator;
}

const removeVogals = (word) => word.split("").reduce(reducer, "");


console.log(removeVogals("Gabriel"));