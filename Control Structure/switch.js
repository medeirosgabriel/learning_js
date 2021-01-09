const printResult = function(n) {
    switch(Math.floor(n)) {
        case 10:
        case 9:
            console.log('Honor Board')
            break // Doesn't execute the next
        case 8:
        case 7:
            console.log('Approved')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperation')
            break
        case 3: case 2: case 1: case 0:
            console.log('Failed')
            break
        default:
            console.log('Invalid Number')
    }
}

printResult(10)
printResult(8.9)
printResult(6.5)
printResult(2.3)
printResult(-1)
printResult(11)