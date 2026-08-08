function split(str, mask) {
    if (str.length !== mask.reduce((acc, curr) => acc + curr, 0)) {
        return null
    }
  
    const resultArray = []
    let i = 0
  
    for (const length of mask) {
        resultArray.push(str.slice(i, i + length))
      
        i += length
    }
​
    return resultArray
}