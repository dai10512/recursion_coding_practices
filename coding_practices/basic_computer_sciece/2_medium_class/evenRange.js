function evenRange(a,b){
    // 関数を完成させてください
    let evenList = []
    for(let i = a; i <= b; i ++){
        if(i % 2 == 0){
            evenList.push(i)
        }
    }
    return evenList
}

// 2の倍数の配列
// very easy
// a,b (a <= b) が与えられるので、a から b までの中に含まれる 2 の倍数を配列として返す evenRange という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer a, integer b

// 出力のデータ型： integer[]

// evenRange(10,20) --> [10,12,14,16,18,20]

// evenRange(1,1) --> []

// evenRange(3,29) --> [4,6,8,10,12,14,16,18,20,22,24,26,28]