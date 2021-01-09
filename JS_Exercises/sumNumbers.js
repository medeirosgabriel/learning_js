const reducer = (accumulator, currentElement) => accumulator + currentElement;

const sumNumbers = (list) => {
    return list.reduce(reducer);
}

console.log(sumNumbers([1,2,3,4,5]))