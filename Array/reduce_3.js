Array.prototype.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue || 0
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this)
    }
    return accumulator
}

const sum = (total, value) => total + value
const numbers = [1,2,3,4,5,6]
console.log(numbers.reduce2(sum, 21))