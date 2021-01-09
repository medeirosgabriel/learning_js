const school = [{
    name: "Class 1",
    students: [{
        name: "Gustavo",
        grade: 8.1
    }, {
        name: 'Ana',
        grade: 9.3
    }]
}, {
    name: "Class 2",
    students: [{
        name: 'Rebeca',
        grade: 8.9
    }, {
        name: "Roberto",
        grade: 7.3
    }]
}]

const getGradeStudent = student => student.grade
const getGradeClass = c => c.students.map(getGradeStudent)

const grades1 = school.map(getGradeClass)
console.log(grades1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const grades2 = school.flatMap(getGradeClass)
console.log(grades2)