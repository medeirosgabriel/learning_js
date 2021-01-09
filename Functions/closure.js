// Closure == scope of function when declared
// This scope allows the function access and change variables external to the function

const x = 'Global'

function outside() {
    const x = 'Local'
    function inside() {
        return x;
    }
    return inside;
}

const myFunction = outside()
console.log(myFunction())