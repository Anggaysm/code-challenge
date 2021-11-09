function isDivideBy(number, a, b) {
    if(number % a === 0 && number%b === 0){
        return true
    }else{
        return false
    }
  }

  console.log(isDivideBy(-12, 2, -5))