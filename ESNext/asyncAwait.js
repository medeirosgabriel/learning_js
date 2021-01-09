// With promises

const http = require("http")

const getClass = letter => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = ""
    
            res.on("data", data => {
                result += data
            })
    
            res.on("end", () => {
                try {
                    resolve(JSON.parse(result))
                }catch(e) {
                    reject(e)
                }
            })
        })
    })
}

// Simplify the use of promises

let getStudents = async () => {
    const ta = await getClass("A")
    const tb = await getClass("B")
    const tc = await getClass("C")
    return [].concat(ta,tb,tc)
} // Return a AsyncFunction object

getStudents()
    .then(students => students.map(a => a.nome))
    .then(names => console.log(names))