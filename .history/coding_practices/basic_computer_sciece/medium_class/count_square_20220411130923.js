function countSquare(x,y){
    // 関数を完成させてください
    gcd = getGCD(x,y)
    return  x * y / (gcd * gcd)
}

function getGCD(x,y){
    if (x % y == 0){
        return y
    }
    return getGCD(y, x % y)
}
