function toAcronym(inp){
    const words = inp.split(" ")
    
    let acronym = ""
    
    for (const word of words) {
        acronym += word[0]
    }
  
    return acronym.toUpperCase()
}