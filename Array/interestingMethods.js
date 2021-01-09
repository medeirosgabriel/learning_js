const pilots = ["Vettel", "Alonso", "Raikkonen", "Massa"]
pilots.pop()
console.log(pilots)

pilots.push("Verstappen")
console.log(pilots)

pilots.shift() // Remove the first element
console.log(pilots)

pilots.unshift("Hamilton")
console.log(pilots)

// From index 2 add 2 elements ("Bottas" and "Massa") and remove none
pilots.splice(2,0, "Bottas", "Massa")
console.log(pilots)

pilots.splice(3,1) // From index 3 remove 1 element
console.log(pilots)

const somePilots1 = pilots.slice(2)
console.log(somePilots1)

const somePilots2 = pilots.slice(1,4)
console.log(somePilots2)