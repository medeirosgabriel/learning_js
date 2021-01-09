// Tagged template -> Proccess the template inside a function

function tag(parts, ...values) {
    console.log(parts)
    console.log(values)
    return "Other string"
}

const student = 'Gui'
const situation = 'Passed'
console.log(tag `${student} is ${situation}`)