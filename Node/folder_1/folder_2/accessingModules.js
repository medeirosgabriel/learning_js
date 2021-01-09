const moduleA = require("../../moduleA")
console.log(moduleA.hello)

const greeting = require("greeting")
console.log(greeting.hello)

const http = require("http")
http.createServer((req, res) => {
    res.write("Good Morning!")
    res.end()
}).listen(8080)