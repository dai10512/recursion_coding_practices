function sumOfAllPrimes(n){
    let cache = []
    for(let i = 0; i <= n; i ++ ){
        cache.push(true)
    }

    console.log(cache)

    for(let currenPrimeNum = 2; currenPrimeNum <= Math.ceil(Math.sqrt(n)) ; currenPrimeNum ++){
        for(let j = currenPrimeNum +1 ; j < cache.length; j++ ){
            if(j % currenPrimeNum == 0){
                cache[j] = false
            }
        }
    }

    let count = -1

    for(let i = 0;i < cache.length;i++){
        if(cache[i] == true){
            count += i        
        }
    }
    return count

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