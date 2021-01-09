for (let l of "Cod3r") {
    console.log(l)
}

const ecmaSubjects = ["Map", "Set", "Promise"]

for (let i in ecmaSubjects) {
    console.log(i)
}

for (let subject of ecmaSubjects) {
    console.log(subject)
}

const subjectsMap = new Map([
    ["Map", {introduced: true}],
    ["Set", {introduced: true}],
    ["Promise", {introduced: true}]
])

for (let subject of subjectsMap) {
    console.log(subject)
} 

for (let key of subjectsMap.keys()) {
    console.log(key)
} 

for (let value of subjectsMap.values()) {
    console.log(value)
}

for (let [key, value] of subjectsMap.entries()) {
    console.log(key, value)
}

const s = new Set(['a', 'b', 'c'])
for (let l of s) {
    console.log(l)
}
