const person = {
    name: "Anna",
    age: 5,
    address: {
        street: "ABC",
        number: 123
    }
}

const {name, age} = person
console.log(name, age)

const {name:n, age:a} = person
console.log(n, a)

const {lastName, happy = true} = person
console.log(lastName, happy)

const {address : {street, number, cep}} = person
console.log(street, number, cep)