const invertObject = (obj) => {
    Object.keys(obj).forEach(key => {
        obj[obj[key]] = key
        delete obj[key]
    });
    return obj
}

console.log(invertObject({"A":1, "43":true, false:312}))