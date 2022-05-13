function multipleOfTwoTotal(n){
    // 関数を完成させてください
    if(n <= 0){
        return 0  
    }
    return summation(n) + multipleOfTwoTotal(n-1)
}

function summation(n){
    if(n <= 0){
        return 0
    }
    return (n * 2) + summation(n-1)
}