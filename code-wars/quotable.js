function quotable(name, quote){
    let buatNama = [name, "said: "]
    let buatquote = quote
    let result = buatNama.join(' ') + buatquote
    return result
  }
  console.log(quotable("Angga", "Practice makes perfect"))