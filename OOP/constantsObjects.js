const person = {name : 'Joao'}
person.name = 'Peter'
console.log(person)

//person = {name:'Ana'}

// Constant Object
Object.freeze(person)

person.name = "Ana"
console.log(person)

person.age = 17
console.log(person)

delete person.name
console.log(person)
