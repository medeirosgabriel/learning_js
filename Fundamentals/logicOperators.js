function shopping(job1, job2) {
    const buyIceCream = job1 || job2
    const buyTV50 = job1 && job2
    const buyTV32 = job1 != job2
    const keepHealthy = !buyIceCream
    return {buyIceCream, buyTV50, buyTV32, keepHealthy}
}

console.log(shopping(true, true))
console.log(shopping(true, false))
console.log(shopping(false, true))
console.log(shopping(false, false))