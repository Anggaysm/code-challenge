function doubleChar(str) {
    let result = []
    for(let i = 0; i < str.length; i++){
        result.push(str[i]+str[i])
    }
    return result.join('')
  }
console.log(doubleChar("sby"))