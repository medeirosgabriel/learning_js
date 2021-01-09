// Arrow Function
const sum = (a, b) => a + b
console.log(sum(2,3))

// Arrow Function (this)
const lexic1 = () => console.log(this === exports)
const lexic2 = lexic1.bind({})
lexic1()
lexic2()

// Default Parameter
function log(text = 'Node') {
    console.log(text)
}

log()
log("Heyy")

// Rest Operator

function total(...numbers) {
    let total = 0
    numbers.forEach(n => total += n)
    return total 
}
console.log(total(1,2,3,4,5,6))