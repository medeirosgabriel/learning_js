// let and const

{
    var a = 2
    let b = 3
}

console.log(a)
// console.log(b)

// Template String
const prod = 'iPad'
console.log(`Produto = ${prod}`)

// Destructuring

const [w,o,...rds] = 'Cod3r'
console.log(w,o,rds)

const [x,,y] = [1,2,3]
console.log(x,y)

const {name, age} = {name: "Ana", age:9}
console.log(name, age)
