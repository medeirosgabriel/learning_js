function averageStudent(students) {
    let list = []
    let keys = Object.keys(students)
    keys.forEach((student) => {
        list.push({"name":student, "average":avg(students[student])})
    })
    return list.reduce(max, list[0]["average"]);
    
}
const max = (finalValue, currentValue) => {
    if (currentValue["average"] > finalValue) {
        finalValue = currentValue
    }
    return finalValue
}

const avg = (list) => {
    let sum = list.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    })
    let average = sum/list.length
    return average
}

console.log(averageStudent({
    Joao: [8, 7.6, 8.9, 6], // average = 7.625
    Mariana: [9, 6.6, 7.9, 8], // average = 7.875
    Carla: [7, 7, 8, 9] // average = 7.75
}));