class Grandfather {
    constructor(lastName) {
        this.lastName = lastName
    }
}

class Father extends Grandfather {
    constructor(lastName, profession = "Teacher") {
        super(lastName)
        this.profession = profession
    }
}

class Son extends Father {
    constructor() {
        super("Gates")
    }
}

const son = new Son()
console.log(son)