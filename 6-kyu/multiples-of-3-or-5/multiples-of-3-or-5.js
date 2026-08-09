function solution(number) {
    if (number <= 0) {
        return 0
    }
  
    const numbersArray = []
    
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            numbersArray.push(i)
        }
    }
  
    return numbersArray.reduce((acc, curr) => acc + curr, 0)
}