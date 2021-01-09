const grades = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

let lowGrades1 = []

// No Callback

for (let i in grades) {
    if (grades[i] < 7) {
        lowGrades1.push(grades[i])
    }
}
console.log(lowGrades1)

// With Callback

lowGrades2 = grades.filter(grade => grade < 7)
console.log(lowGrades2)