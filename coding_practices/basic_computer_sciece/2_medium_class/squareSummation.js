function squareSummation(n){
    // 関数を完成させてください
    count = 0
    for(let i = 0; i < n; i ++){
        count += Math.pow(i+1,2)
    }
    return count
}

// 二乗の総和
// easy
// 自然数 n が与えられるので、12 + 22 + 32 + ... + n2 を計算する squareSummation という関数を再帰を使って作成してください。

// 関数の入出力例

// 入力のデータ型： integer n

// 出力のデータ型： integer

// squareSummation(2) --> 5

// squareSummation(3) --> 14

// squareSummation(4) --> 30

// squareSummation(10) --> 385

// squareSummation(15) --> 1240

// squareSummation(100) --> 338350

// squareSummation(208) --> 3021304