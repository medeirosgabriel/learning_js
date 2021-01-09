Number.prototype.between = function(start, end) {
    return this >= start && this <= end
}

const printResult = function (n) {
    if (n.between(9, 10)){
        console.log('Honor Board')
    }else if (n.between(7, 8.99)){
        console.log('Approved')
    }else if (n.between(4, 6.99)){
        console.log('Recuperation')
    }else if (n.between(0, 3.99)){
        console.log('Failed')
    }else{
        console.log('Invalid Number');
    }
}

printResult(10)
printResult(8.99)
printResult(6.55)
printResult(2.3)
printResult(-1)
printResult(11)