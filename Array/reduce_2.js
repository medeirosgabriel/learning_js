const students = [
    {name:"John", grade:7.3, scholarship:false},
    {name:"Maria", grade:9.2, scholarship:true},
    {name:"Pedro", grade:9.8, scholarship:false},
    {name:"Ana", grade:8.7, scholarship:true}
]

const allScholarship = function(result, ss) {
    return result && ss;
}
console.log(students.map(a => a.scholarship).reduce(allScholarship))

const someScholarship = function(result, ss) {
    return result || ss;
}
console.log(students.map(a => a.scholarship).reduce(someScholarship))