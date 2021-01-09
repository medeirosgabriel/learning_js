function Class(name, idVideo){
    this.name = name
    this.idVideo = idVideo
}

const class1 = new Class("Hello. Welcome!", 123)
const class2 = new Class("See you later!", 456)
console.log(class1, class2)

// Simulating the new
function new_(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj;
}

const class3 = new_(Class, "Hello. Welcome!", 123)
const class4 = new_(Class,"See you later!", 456)
console.log(class3, class4)