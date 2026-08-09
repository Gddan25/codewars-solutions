function wordsToMarks(str)  {
    const lettersStore = "abcdefghijklmnopqrstuvwxyz".split("").reduce((acc, curr, index) => {
        acc[curr] = index + 1
      
        return acc
    }, {})
    
    return str.split("").reduce((acc, curr) => acc + lettersStore[curr], 0)
}