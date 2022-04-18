// function divideBy3Count(n){
//     // 関数を完成させてください
//     if(n < 3){
//         return 0
//     }
//     else if(n == 3){
//         return 1
//     }
//     return 1 + divideBy3Count(n/3)
// }


function divideBy3Count(n){
    // 関数を完成させてください
    count = 0
    while(n > 0){
        if(n % 3 == 0){
            count ++
        }
        n = n/3
    }
    return count
}