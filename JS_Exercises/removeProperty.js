function removeProperty(obj, key) {
    if (obj.hasOwnProperty(key)) {
        delete obj[key];
    }
    return obj;
}

let obj = {1:"Gabriel", 4:"Daniel", "José":2};

console.log(removeProperty(obj, 4));