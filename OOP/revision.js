const prod = new Object
prod.name = 'Chair'
prod['price'] = 120

console.log(prod)

delete prod.price

console.log(prod)

const car = {
    model: 'A4',
    price: 89000,
    owner: {
        name: 'Bruno',
        age: 56,
        address: {
            street: 'ABC',
            number: 123
        }
    },
    conductors: [{
        name: 'Junior',
        age: 10
    }, {
        name: 'Anna',
        age: 42
    }],
    calculateInsuranceValue: function() {
        //...
    }
}

car.owner.address.number = 1000
car['owner']['address']['street'] = 'CBA'

console.log(car)
console.log(car.conductors.length)

delete car.conductors
delete car.calculateInsuranceValue
console.log(car)

