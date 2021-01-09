let compareToThis = function (param) {
    console.log(this === param)
}

compareToThis(global)

const obj = {}
compareToThis = compareToThis.bind(obj)
compareToThis(global)
compareToThis(obj)

let compareToThisArrow = param => console.log(this === param)
compareToThisArrow(global)
compareToThis(module.exports)

compareToThisArrow = compareToThisArrow.bind(obj)
compareToThisArrow(obj)
compareToThisArrow(module.exports)