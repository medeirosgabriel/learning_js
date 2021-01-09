function Car(maxSpeed = 200, a = 5) {

    // Private attribute
    let currentSpeed = 0;

    // Public method
    this.speedUp = function () {
        if (currentSpeed + a <= maxSpeed) {
            currentSpeed += a
        }else{
            currentSpeed = maxSpeed
        }
    }

    this.getCurrentSpeed = function () {
        return currentSpeed;
    }
}

const uno = new Car
uno.speedUp()
console.log(uno.getCurrentSpeed())

const ferrari = new Car(350, 20)
ferrari.speedUp()
ferrari.speedUp()
ferrari.speedUp()
console.log(ferrari.getCurrentSpeed())
