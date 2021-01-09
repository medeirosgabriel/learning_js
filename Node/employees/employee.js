const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

axios.get(url).then(response => {
    const employees = response.data
    const filtered = employees.filter(filterCallBack);
    let name = filtered[0].nome;
    let salary = filtered[0].salario;
    for (let i = 1; i < filtered.length; i++) {
        if (filtered[i].salario < salary) {
            name = filtered[i].nome
            salary = filtered[i].salario
        }
    }
    console.log(`Name = ${name} Salary = ${salary.toFixed(2)}`)
})

function filterCallBack(employee) {
    return employee.genero === "F" && employee.pais === "China"
}

// Other way - Faster ans Simple

const chinese = e => e.pais === "China"
const woman = e => e.genero === "F"
const lowestSalary = (acumulator, emp) => {
    return acumulator.salario > emp.salario ? emp : acumulator
}

axios.get(url).then(response => {
    const employees = response.data
    const emp = employees
    .filter(chinese)
    .filter(woman)
    .reduce(lowestSalary)
    console.log(emp)
})