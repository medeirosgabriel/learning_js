const saudation = 'Hey' // Lexic context 1

function exec() {
    const saudation = 'Heyyyy' // Lexic context 2
    return saudation
}

// Objects are nested groups of peers name/value

const client = {
    name: "Peter",
    age: 32,
    weight: 90,
    address: {
        place: 'Rua ABC',
        number: 123
    }
}

console.log(saudation)
console.log(exec())
console.log(client)