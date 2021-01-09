const prod = Object.preventExtensions({
    name: "IDK", price: 1.99, tag: "promotion"
})

console.log("Extensible:", Object.isExtensible(prod))

prod.name = 'Eraser'
prod.description = "The best"
delete prod.tag
console.log(prod)

const person = {name:"Julie", age:35}
Object.seal(person)
console.log("Sealed:", Object.isSealed(person))

person.lastName = 'IDK'
delete person.name
person.age = 29
console.log(person)