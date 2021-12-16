function bmi(weight, height) {
  let result = weight / Math.pow(height, 2);
  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25.0) {
    return "Normal";
  } else if (result <= 30.0) {
    return "Overweight";
  } else if (result > 30) {
    return "Obese";
  }
}
console.log(bmi(80, 1.8));