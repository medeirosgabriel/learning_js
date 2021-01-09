// Doesnt't allow repetitions

const teams = new Set()

teams.add("Barcelona")
teams.add("Real Madrid").add("Bayern").add("Juventus")
teams.add("Spurs")
teams.add("Barcelona")

console.log(teams)
console.log(teams.size)
console.log(teams.has("Barcelona"))
console.log(teams.has("Real Madrid"))
teams.delete("Spurs")
console.log(teams.has("Spurs"))

const names = ["Gabriel", "João", "Luiza", "Lucas", "Gabriel"]
const namesSet = new Set(names)
console.log(namesSet)