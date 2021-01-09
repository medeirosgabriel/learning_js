const objToArray = (obj) =>  {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        keys[i] = [keys[i], obj[keys[i]]]
    }
    return keys;
}

console.log(objToArray({"Gabriel":1, 34:"Chico", true:213}));