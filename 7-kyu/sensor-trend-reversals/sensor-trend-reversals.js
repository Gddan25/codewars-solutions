function countDirectionChanges(readings) {
    if (readings.length <= 1) {
        return 0
    }
  
    let quantityChangingDirection = 0
    
    let increasing = false
    let decreasing = false
    
    let i = 0
    
    if (readings[i] === readings[i + 1]) {
        while (readings[i] === readings[i + 1]) {
            if (readings[i] > readings[i + 1]) {
                decreasing = true
            }
            else if (readings[i] < readings[i + 1]) {
                increasing = true
            }
          
            i++
        }
    }
    else {
        if (readings[i] > readings[i + 1]) {
            decreasing = true
        }
        else if (readings[i] < readings[i + 1]) {
            increasing = true
        }
    }
  
    i++
    
    for (; i < readings.length - 1; i++) {
        if (readings[i] > readings[i + 1] && !decreasing) {
            quantityChangingDirection++
           
            increasing = false
            decreasing = true
        }
        else if (readings[i] < readings[i + 1] && !increasing) {
            quantityChangingDirection++
           
            increasing = true
            decreasing = false
        }
    }
  
    return quantityChangingDirection
}