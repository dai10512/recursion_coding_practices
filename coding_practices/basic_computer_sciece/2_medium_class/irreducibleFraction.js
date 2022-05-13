function irreducibleFraction(x,y){
    gcdNumber = gcd(x,y)
    minX = x/gcdNumber
    minY = y/gcdNumber
    if(x % y == 0){
        return minX / minY 
    }
    else{
        return x/gcdNumber + '/' + y/gcdNumber
    }
}

function gcd(x,y){
    if((x % y) == 0){
        return y
    }
    else{
        return gcd(y, x % y)
    }
}

