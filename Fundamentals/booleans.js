let isActive = true
console.log(isActive)

isActive = false
console.log(isActive)

isActive = 1
console.log(!!isActive)

console.log("True...")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})

console.log("Untrue...")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

let name = 'Gabriel'
console.log(name || "Desconhecido")

name = ""
console.log(name || "Desconhecido")

