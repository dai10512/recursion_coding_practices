function recursiveIsPrime(n){
    // 関数を完成させてください
   return recursiveIsPrimeHelper(n,n-1)
}

// 再起で素数が無いか繰り返す計算式
function recursiveIsPrimeHelper(x,y){
    if(y == 1){
        return true
    }
    else if(x % y == 0){
        return false
    }
    return recursiveIsPrimeHelper(x,y-1)
}