function threeGCD(x,y,z){
    // 関数を完成させてください
    firstCalNum = firstCal(x,y)
    secondCalNum = secondCal(firstCalNum,z)
    
    return secondCalNum
}

function firstCal(x,y){
    if ((x % y) == 0){
        console.log('y:' + y)
        return y;
    } else {
        return firstCal(y, x % y);
    }
}

function secondCal(firstCalNum,z){
    if ((firstCalNum % z) == 0){
        console.log('z:' + z)
        return z;
    } else {
        return secondCal(z, firstCalNum % z);
    }
}