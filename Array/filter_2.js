Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const products = [
    {name: 'Notebook', price: 2499, fragile:true},
    {name: 'iPad', price: 4199, fragile:true},
    {name: 'glass', price: 12.49, fragile:true},
    {name: 'chair', price: 18.99, fragile:false},
]

const expensive = prod => prod.price >= 50
const fragile = prod => prod.fragile
console.log(products.filter2(expensive).filter2(fragile))