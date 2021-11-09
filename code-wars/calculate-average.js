function find_average(array) {
    if(array.length !== 0){
        return array.reduce((a, b) => a + b) / array.length
    }else{
        return 0
    }
  }
  console.log(find_average([]))