function birthdayCakeCandles(candles) {
    let tertinggi = candles.reduce((a ,b) =>{
        return (a > b ? a : b)
    })
    let result = 0;
    for(let i=0; i<candles.length; i++){
        if(tertinggi === candles[i]){
            result++
        }
    }
    return result
}
console.log(birthdayCakeCandles([3,2,1,3]))