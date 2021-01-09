// Using the literal notation
const obj1 = {}
console.log(obj1)

// Object em JS - Object == Constructor function
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Constructor function
function Product(name, price, disc) {
    this.name = name;
    this.getPriceWithDiscount = () => {
        return price * (1 - disc)
    }
}

const p1 = new Product('pen', 7.99, 0.15)
console.log(p1.getPriceWithDiscount())

// Factory Function
function createEmployee(name, baseSalary, absences) {
    return {
        name,
        baseSalary,
        absences,
        getSalary() {
            return (baseSalary/30) * (30 - absences)
        }
    }
}

const e1 = createEmployee('Joao', 7900, 4)
const e2 = createEmployee('Maria', 11400, 1)
console.log(e1.getSalary(), e2.getSalary())

// Object.create
const daughter = Object.create(null)
daughter.name = 'Anna'
console.log(daughter)

// JSON
const fromJson = JSON.parse('{"info": "I am a JSON"}')
console.log(fromJson.info)