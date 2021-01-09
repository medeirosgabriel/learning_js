const products = [
    {name: 'Notebook', price: 2499, fragile:true},
    {name: 'iPad', price: 4199, fragile:true},
    {name: 'glass', price: 12.49, fragile:true},
    {name: 'chair', price: 18.99, fragile:false},
]

console.log(products.filter(function(p) {
    return false
}))

const expensive = prod => prod.price >= 50
const fragile = prod => prod.fragile
console.log(products.filter(expensive).filter(fragile))