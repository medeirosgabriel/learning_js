// Class
class Person_1 {
    constructor(name) {
        this.name = name;
    }

    talk() {
        console.log(`My name is ${this.name}`)
    }
}

const p1 = new Person_1('Paula')
p1.talk()

// Factory Function
const createPerson = name => {
    return {
        talk: () => console.log(`My name is ${name}`)
    }
}

const p2 = createPerson('John')
p2.talk()

// Constructor Function
function Person_2(name) {
    this.name = name;
    this.talk = function () {
        console.log(`My name is ${this.name}`)
    }
}

const p3 = new Person_2('Anna')
p3.talk()