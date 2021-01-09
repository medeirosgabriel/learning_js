const person = {
    saudation: "Good Morning!",
    talk() {
        console.log(this.saudation)
    }
}

person.talk()
let talk = person.talk
talk() // Error

talk = person.talk.bind(person) // Tie to the object 
talk()