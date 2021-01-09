const technologies = new Map()
technologies.set("React", {framework: false})
technologies.set("Angular", {framework: true})

console.log(technologies.react)
console.log(technologies.get('React').framework)

const miscellaneousKeys = new Map([
   [function () { }, "Function"],
   [{}, 'Object'],
   [123, 'Number'],
])

miscellaneousKeys.forEach((vl, ke) => {
    console.log(ke, vl)
})

console.log(miscellaneousKeys.has(123))
miscellaneousKeys.delete(123)
console.log(miscellaneousKeys.has(123))
console.log(miscellaneousKeys.size)

miscellaneousKeys.set(123, 'a')
miscellaneousKeys.set(123, 'b')
miscellaneousKeys.set(456, 'b')
console.log(miscellaneousKeys)

