console.log(typeof Array, typeof new Array, typeof [])

let approved = new Array("Bia", "Charles", "Ana")
console.log(approved)

approved = ["Bia", "Charles", "Ana"]
console.log(approved[0])
console.log(approved[1])
console.log(approved[2])
console.log(approved[3])

approved[3] = 'Paulo'
approved.push("Amalia")
console.log(approved.length)

approved[9] = 'Raphael'
console.log(approved.length)
console.log(approved[8] === undefined)
console.log(approved)


console.log(approved)
approved.sort()
console.log(approved)

delete approved[1]
console.log(approved[1])
console.log(approved[2])
console.log(approved)

approved = ["Bia", "Charles", "Ana"]
approved.splice(1,2, "Element1", "Element2") // Add in index 1 and remove 2 elements
console.log(approved)
approved.splice(1,1, "Element1", "Element2")
console.log(approved)
