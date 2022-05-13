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



// リスト内の要素の足し合わせ
// easy
// League は小学生向けに算数のゲームを作りました。ゲームではランダムに数字が入っている箱を選び、全ての数字を取り出します。そして、取り出した数字から奇数番目のものを全て足し合わせ、合計値を求めていきます。数字が入った箱 intArr が与えられるので、全ての奇数番目を足した値を返す addEveryOtherElement という関数を定義してください。

// 関数の入出力例

// 入力のデータ型： integer[] intArr

// 出力のデータ型： integer

// addEveryOtherElement([34,46,45,57]) --> 79

// addEveryOtherElement([60,45,66,75,56,32,654,45,100]) --> 936

// addEveryOtherElement([5,10]) --> 5

// addEveryOtherElement([120,85,45,67,54,343,57,800,88,67,56,57,68,75]) --> 488

// addEveryOtherElement([]) --> 0