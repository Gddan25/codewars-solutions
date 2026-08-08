function lettersToNumbers(str) {
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const symbolsStore = {}
    
    for (let i = 0; i < lowercaseLetters.length; i++) {
        symbolsStore[lowercaseLetters[i]] = i + 1
    }
    
    for (let i = 0, j = 0; i < uppercaseLetters.length; i++) {
        symbolsStore[uppercaseLetters[i]] = j + 2
        j += 2
    }
    
    for (let i = 0; i < 10; i++) {
        symbolsStore[String(i)] = i 
    }
  
    let scores = 0
  
    for (let symbol of str) {
        if (symbolsStore.hasOwnProperty(symbol)) {
            scores += symbolsStore[symbol]
        }
    }
  
    return scores
}
​