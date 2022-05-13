function summationOfSummation(n){
    if(n <= 0){
      return 0
    }
    return summation(n) + summationOfSummation(n-1)
}

function summation(n){
    if(n <= 0){
      return 0
    }
    return n + summation(n - 1)
}