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