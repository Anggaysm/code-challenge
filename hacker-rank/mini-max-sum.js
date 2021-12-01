function miniMaxSum(arr) {
    let resultMini = arr[0]
    let resultMax = arr[0]
    let sum = 0
    for(let i = 0; i < 5; i++){
        if(resultMax < arr[i]){
            resultMax = arr[i];
        }else if(resultMini > arr[i]){
            resultMini = arr[i]
        }
        sum += arr[i]
    }
    let maxSum = sum - resultMini
    let miniSum = sum - resultMax
    return miniSum + " " + maxSum
}
console.log(miniMaxSum([1, 2, 3, 4, 6]))