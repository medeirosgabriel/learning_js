const dad = {name:"Peter", hairColor: 'black'}

const daughter1 = Object.create(dad)
daughter1.name = 'Anna'
console.log(daughter1.hairColor)

const daughter2 = Object.create(dad, {
    name: {value: 'Bia', writable: false, enumerable: true}
})

console.log(daughter2.name)
daughter2.name = 'Carla'
console.log(`${daughter2.name} has ${daughter2.hairColor} hair`)

console.log(Object.keys(daughter1))
console.log(Object.keys(daughter2))

for (let key in daughter2) {
    daughter2.hasOwnProperty(key) ? // If it belongs to the object
        console.log(key) : console.log("By inheritance")
}