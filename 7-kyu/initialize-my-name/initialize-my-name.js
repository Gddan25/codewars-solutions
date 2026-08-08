function initializeNames(name) {
    const names = name.split(" ")
    
    if (names.length < 3) {
        return name
    }
  
    const resultArray = []
    
    resultArray.push(names[0])
  
    for (let i = 1; i < names.length - 1; i++) {
        resultArray.push(names[i][0] + ".")
    }
  
    resultArray.push(names[names.length - 1])
  
    return resultArray.join(" ")
}