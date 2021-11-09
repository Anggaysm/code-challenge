function find_average(array) {
    let avg = array.reduce((a, b) => a + b) / array.length
    return avg
  }
  console.log(find_average([1,2,3,4]))