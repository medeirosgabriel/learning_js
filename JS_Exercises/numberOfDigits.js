const numberOfDigits = (list, n) => {
    let newList = [];
    if (n !== 0) {
        let min = Math.pow(10, n - 1);
        let max = Math.pow(10, n);
        newList = list.filter((number) => min <= number && number < max);
    }
    return newList;
}

console.log(numberOfDigits([56,67,2,4567,5,385,1,562,89,567,1231,54545], 0));