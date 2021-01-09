Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
}

const supermarketCart = [
    '{"name":"Eraser", "price": 3.45}',
    '{"name":"Notebook", "price": 13.90}',
    '{"name":"Pen Kit", "price": 41.22}',
    '{"name":"Pen", "price": 7.50}'
]

const toObject = json => JSON.parse(json)
const justPrices = prod => prod.price

const result = supermarketCart.map2(toObject).map2(justPrices)
console.log(result)