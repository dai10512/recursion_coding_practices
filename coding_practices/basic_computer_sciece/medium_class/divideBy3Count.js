function divideBy3Count(n){
    // 関数を完成させてください
    if(n < 3){
        return 0
    }
    else if(n == 3){
        return 1
    }
    return 1 + divideBy3Count(n/3)
}


// 1 1/3 0
// 3 3/3 1
// 27 27/3 * 3 *3 3
// 729 729/3 * 3* 3 * 3* 3* 3
 

    // 3 3           1
//  9 3 * 3       2
// 27 3 * 3 * 3   3

// (27) = 3 * (27/3)