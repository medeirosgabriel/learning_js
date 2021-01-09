const array = {0:"Rafael", 1:"Ana", 2:"Bia"}
console.log(array)
Object.defineProperty(array, 'toString', {
    value: function() {return Object.values(this)},
    enumerable: false
})

console.log(array[0])
const myArray = ["Rafael", "Ana", "Bia"]
console.log(array.toString(), myArray)