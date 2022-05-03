function primeArray(n){
    // 関数を完成させてください
    let result = []
    let isPrime = true
    // each number do among n
    for(let i = 2; i <= n; i++){

        // find primenumber among eachnumber
        for(let j = 2; j < i; j++){
            if(i % j == 0){ 
                console.log(' == 0')  
                console.log(i)  
                console.log(j)
                isPrime = false
                break
            }
        }
        if(isPrime){
            console.log(true)
            console.log(i)
            result.push(i)
        }
        isPrime = true
    }
    return result
}

// 素数の配列
// easy
// 自然数 n が与えられるので、1 から n までに含まれる素数を配列として返す primeArray という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer n

// 出力のデータ型： integer[]

// primeArray(97) --> [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]

// primeArray(1) --> []

// primeArray(2) --> [2]