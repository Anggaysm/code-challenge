function rentalCarCost(d) {
    let total = d * 40;
    if( 7 <= d ){
        return total - 50
    }else if(3 <= d){
        return total -20
    }
    return total;
  }
  console.log(rentalCarCost(4))