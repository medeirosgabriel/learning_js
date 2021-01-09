function isLeap(year) {
    const a = year % 4 == 0
    const b = year % 100 == 0
    const c = year % 400 == 0
    return (a && !b) || c
}

console.log(isLeap(2020));
