function firstAndLast(list) {
    let r = [];
    r.push(list[0]);
    r.push(list[list.length - 1]);
    return r;
}

console.log(firstAndLast(["Janaina", "Gabriel", 1, 4, "Suzana", 6]))