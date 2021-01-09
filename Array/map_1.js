const nums = [1,2,3,4,5]

let result = nums.map(function(e) {
    return 2*e;
})

console.log(result)

const sum10 = e => e + 10
const triple = e => 3*e
const toMoney = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`

result = nums.map(sum10).map(triple).map(toMoney)
console.log(result)