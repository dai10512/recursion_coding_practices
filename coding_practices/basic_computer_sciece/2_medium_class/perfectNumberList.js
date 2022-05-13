function perfectNumberList(n){
    // 関数を完成させてください
    message = '6'
    for(i=7;i<=n;i++){
        totalDivisor = getTotalDivisor(i)
        if(totalDivisor == i){
            message += '-' +i.toString()
        }
    }
    return (n >= 6) ? message : 'none'
}

function getTotalDivisor(n){
    totalDivisor = 0
    for(i =1;i < n;i++){
        if(n%i==0){
            totalDivisor += i
        }
    }
    console.log(totalDivisor)
    return totalDivisor
}

// パーフェクトナンバー
// easy
// Mayer は、6 と 6 以外の約数 1, 2, 3 を全てを足した値が一致することに気が付きました。他にもあるのではないかと思い、同様の値を見つけようとしています。自然数 n が与えられるので、1 から n のうち perfect number（自然数 n と、その数自身を除く自然数 n の約数を全て足し上げたものが一致する値）を返す、perfectNumberList という関数を作成してください。perfect が存在しない場合は、none と返してください。

// 関数の入出力例

// 入力のデータ型： integer n

// 出力のデータ型： string

// perfectNumberList(3) --> none

// perfectNumberList(6) --> 6

// perfectNumberList(28) --> 6-28

// perfectNumberList(100) --> 6-28

// perfectNumberList(496) --> 6-28-496

// perfectNumberList(1000) --> 6-28-496

// perfectNumberList(10000) --> 6-28-496-8128