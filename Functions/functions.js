// Literal

function func1() {}

const func2 = function() {}

const array = [function(a,b) {return a + b}, func1, func2]
console.log(array[0](2,3))

const obj = {}
obj.talk = function() {return 'Heyy'}
console.log(obj.talk())

function run(func) {
    func()
}

run(function () {console.log('Executing...')})

function sum(a,b) {
    return function(c) {
        console.log(a + b + c);
    }
}

sum(2,3)(4)
const plusFive = sum(2,3)
plusFive(5)