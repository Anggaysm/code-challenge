function compareTriplets(a, b) {
    let pointA = 0
    let pointB = 0;
    for(let i=0; i < 3; i++){
        if(a[i] > b[i]){
             pointA++
        }else if(a[i] < b[i]){
             pointB++
        }
    }
    return [pointA, pointB]
}
console.log(compareTriplets([1, 2, 3], [3, 2, 1]))