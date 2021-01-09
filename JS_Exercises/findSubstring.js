function findSubstring(substring, list) {
    let newList = list.filter((word) => word.split(substring).length > 1)
    return newList;
}

console.log(findSubstring("pro", ["programação", "mobile", "profissional"]))