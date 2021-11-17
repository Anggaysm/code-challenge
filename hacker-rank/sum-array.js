function simpleArraySum(ar) {
    let sum = ar.reduce((a, b) => a + b)
    return sum
}
console.log(simpleArraySum([1,2,3,4,10,11]))