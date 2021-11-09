function simpleArraySum(...ar) {
    // Write your code here
    const result = ar.reduce(function(a, b) { return a + b; }, 0); ;
    return result
}
console.log(simpleArraySum(1, 2, 3))