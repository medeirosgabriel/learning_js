// ES8: Object.values/Object.entries
const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Literal Notation
const name = "Carla"
const person = {
    name,
    hello() {
        return "Hello"
    }
}

console.log(person.name, person.hello())

// Class
class Animal {}

class Dog extends Animal {
    talk() {
        return "Au au!"
    }
}

console.log(new Dog().talk())