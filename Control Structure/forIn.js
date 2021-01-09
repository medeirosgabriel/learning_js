const grades = [6.7, 7.4, 9.8, 8.1, 7.7]
for (g in grades) {
    console.log(`Grade = ${g}`)
}

const person = {
    name: "Anna",
    lastName: "jobs",
    age: 29,
    weight: 64
}

for (let attribute in person) {
    console.log(`${attribute} = ${person[attribute]}`)
}

