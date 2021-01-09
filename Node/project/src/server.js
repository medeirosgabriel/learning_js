const port = 3003

const express = require("express")
const app = express()
const bodyParser = require("body-parser") 
const db = require("./dataBase")

/* 
    Body Parser
    For all requirements it is called. 
    If the pattern is urlencoded, 
    it transforms the request body into an object;
*/

app.use(bodyParser.urlencoded({extended: true})) // Used in any request to transform the request body into an object;

app.get("/products", (req, res, next) => {
    res.send(db.getProducts())
})

app.get("/products/:id", (req, res, next) => {
    res.send(db.getProduct(req.params.id)) // Convert to JSON
})

app.post("/products", (req, res, next) => {
    const product = db.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) // JSON
})

app.put("/products/:id", (req, res, next) => {
    const product = db.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) // JSON
})

app.delete("/products/:id", (req, res, next) => {
    const product = db.removeProduct(req.params.id) // Get an url attribute
    res.send(product) // JSON
})

app.listen(port, () =>{
    console.log(`Server running on port ${port}.`)
})
