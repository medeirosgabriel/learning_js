// A factory function return a new Object
module.exports = () => {
    return {
        value: 1,
        inc() {
            this.value ++
        }
    }
}