function sumOfAllPrimes(n){
    // 関数を完成させてください
    total = 0
    for(i=2;i<=n;i++){
        total += isPrimNumber(i)
    }
    return total
}

function isPrimNumber(n){
    answer= n
    for(i =2; i < n ; i ++){
        if(n%i==0){
            answer = 0
        }
    }
    return answer
}

// 素数の和
// easy
// ある国は長く存続できたことに感謝を込め、国民に給付金を渡そうと考えました。そこで、建国から経過した年数 n までに含まれている、全ての素数を足した数を給付金にする予定です。自然数 n が与えられるので、給付金の額を返す sumOfAllPrimes という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer n

// 出力のデータ型： integer

// sumOfAllPrimes(1) --> 0

// sumOfAllPrimes(2) --> 2

// sumOfAllPrimes(3) --> 5

// sumOfAllPrimes(100) --> 1060

// sumOfAllPrimes(1000) --> 76127