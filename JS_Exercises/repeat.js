function repeat(anything, times) {
    let list = [];
    for (let i = 0; i < times; i++) {
        list.push(anything);
    }
    return list
}

console.log(repeat("Any", 4));