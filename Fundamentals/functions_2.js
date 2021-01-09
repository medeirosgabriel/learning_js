// Storing a function in a variable

const printSum = function(a, b) {
    console.log(a + b);
}

printSum(2, 3)

// Storing a arrow function in a variable

const sum = (a, b) => {
    return a + b
}

console.log(sum(2,3))

// Implicit return

const subtration = (a, b) => a - b;
console.log(subtration(2,3))