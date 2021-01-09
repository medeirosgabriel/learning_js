const counterA = require("./simpleInstance")
const counterB = require("./simpleInstance")

const counterC = require("./newInstance")()
const counterD = require("./newInstance")()

counterA.inc()
counterA.inc()
console.log(counterA.value, counterB.value)

counterC.inc()
counterC.inc()
console.log(counterC.value, counterD.value)

