function opposite(number) {
    if(number > 0){
        return number - number * 2
    }else if(number < 0){
        return number -+ number * 2
    }else{
        return 0
    }
  }
  console.log(opposite(13))