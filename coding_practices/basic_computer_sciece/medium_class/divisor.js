function divisor(number){
    // 関数を完成させてください
    x=number
    return helper(number,x)
}

function helper(number, x){
    if(x == 1){
        return `1`
    }
    else if(number % x == 0){
        return helper(number,x-1) + `-${x}`
    }
    return helper(number, x-1)
}

// 1  1
// 2  1-2

// 3  1    0   -3
// 4  1   -2   -4
// 5  1    0   -5
// 6  1  -2-3  -6
// 7  1    0    -7
// 8  1  -2-4   -8
// 9  1   -3    -9
// 10 1  -2-5   -10
// 11 1    0    -11
// 12 1  2-3-6  -12

// number     -number