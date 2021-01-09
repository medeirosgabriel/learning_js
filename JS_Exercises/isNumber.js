isNumber = (value) => typeof value === 'number' && isFinite(value);

filterNumbers = (list) => list.filter(isNumber);

list = ["Chico", 0.34, true, -12321, false, "Alexandre", 15, "Gabriel", 1]
console.log(filterNumbers(list));