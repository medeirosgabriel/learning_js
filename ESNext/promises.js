function talkAfter(seconds, text) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(text)
        }, seconds * 1000)
    })
}

talkAfter(3, "Nice!")
    .then(text => text.concat("?!?!"))
    .then(otherText => console.log(otherText))
    .catch(e => console.log(e))