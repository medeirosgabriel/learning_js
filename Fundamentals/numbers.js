const weight1 = 1.0
const weight2 = Number('2.0')

console.log(weight1, weight2)
console.log(Number.isInteger(weight1))
console.log(Number.isInteger(weight2))

const avaliation_1 = 9.871
const avaliation_2 = 6.871

const total = avaliation_1 * weight1 + avaliation_2 * weight2
const media = total/(weight1 + weight2)

console.log(media.toFixed(2))
console.log(media.toString(2)) //Binary

console.log(typeof media)
console.log(typeof Number)