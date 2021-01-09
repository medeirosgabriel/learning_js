function treatThrowError(error) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'message'
    throw {
        name: error.name,
        msg: error.message,
        data: new Date
    }
}


function printName(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        treatThrowError(e)
    } finally { // Always run
        console.log("Final")
    }
}

const obj = {name:'Richard'}
printName(obj)