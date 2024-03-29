const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in numbers) {
    if (x == 5) {
        break
    }
    console.log(`Index ${x} = ${numbers[x]}`)
}

console.log("----------------------")


for (y in numbers) {
    if (y == 5) {
        continue
    }
    console.log(`Index ${y} = ${numbers[y]}`)
}

extern: for (a in numbers) { //extern == label
    for (b in numbers) {
        if (a == 2 && b == 3) break extern // Break the extern loop
        console.log(`Pair = ${a}, ${b}`)
    }
}

console.log("End!")
