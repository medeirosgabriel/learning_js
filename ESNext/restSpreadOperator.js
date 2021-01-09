// Rest/Spread Operator
// Rest as function parameter

// Use spread with object

const employee = {name: "Maria", salary: 12348.99}
const clone = {active: true, ...employee}
console.log(clone)

// Use spread with array

const groupA = ["John", "Peter", "Glory"]
const groupB = ['Maria', ...groupA, 'Raphaela']
console.log(groupB)