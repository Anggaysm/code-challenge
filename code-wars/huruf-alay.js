function correct(string)
{
    const corrections = {
        "5": "S",
        "0": "O",
        "1": "I",
      };
	return string.split('').map((el) => corrections.hasOwnProperty(el) ? corrections[el] : el).join('')
    
}
console.log(correct("L0ND0N"))
// LONDON

//second ways
function correct2(str){
    return str.replace(/0/g, 'O').replace(/5/g, 'S').replace(/1/g, 'I')
}
console.log(correct2("1 L0VE YOU"))
//I LOVE YOU