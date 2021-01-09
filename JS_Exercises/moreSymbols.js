moreSymbols = (n) => {
    let r = "";
    for (let i = 0; i < n; i++) {
        r += "+";
    }
    return r;
}

console.log(moreSymbols(7))