const sumSpending = (list) => {
    let sum = list.reduce((accumulator, currentObj) => {
        return accumulator + currentObj["preco"]
    }, 0);
    return sum
}

console.log(sumSpending([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]));

console.log(sumSpending([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]));