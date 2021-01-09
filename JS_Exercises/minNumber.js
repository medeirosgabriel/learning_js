const reducer = (finalElement, currentElement) => {
    if (currentElement < finalElement) {
        finalElement = currentElement
    }
    return finalElement;
}

const sumNumbers = (list) => {
    return list.reduce(reducer, list[0]);
}

console.log(sumNumbers([1,-2,893,-4,5]))