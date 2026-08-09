function createSpiral(N) {
    if (N < 1 || !Number.isInteger(N)) {
        return []
    }
  
    let number = 1
  
    const spiralArray = Array.from({ length: N }, () => Array(N).fill(0))
    
    for (let k = 0; k < N; k++) {
        for (let j = k; j < N - 1 - k && number <= N * N; j++) {
            spiralArray[k][j] = number
​
            number++
        }
​
        for (let i = k; i < N - 1 - k && number <= N * N; i++) {
            spiralArray[i][N - 1 - k] = number
​
            number++
        }
​
        for (let j = N - 1 - k; j >= k && number <= N * N; j--) {
            spiralArray[N - 1 - k][j] = number
​
            number++
        }
​
        for (let i = N - 2 - k; i > k && number <= N * N; i--) {
            spiralArray[i][k] = number
​
            number++
        }
    }
  
    return spiralArray
}