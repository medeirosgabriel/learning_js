let a = 3

global.b = 123 // global = window
this.c = 456

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c) // module.exports == this
console.log(module.exports === this)
console.log(module.exports)

abc = 3
console.log(global.abc)