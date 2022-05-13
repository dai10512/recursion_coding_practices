// function fibonacci(n){
//     // 関数を完成させてください
//     if(n==0){
//         return 0
//     }
//     else if(n == 1){
//         return 1
//     }
//     return fibonacci(n-1)+fibonacci(n-2)
// }

// function fibonacci(n){
//     // 関数を完成させてください
//     let fn1 = 0
//     let fn2 = 1

//     count = 0
//     for(let i = 0; i < n; i++){
//         let prevFn1 = fn1;
//         fn1 = fn2;
//         fn2 = prevFn1 + fn2;
//     }

//     return fn1
// }


function fibonacci(n){
    // 関数を完成させてください
    let fn1 = 0
    let fn2 = 1

    count = 0
    i = 0
    while(i < n){
        let prevFn1 = fn1;
        fn1 = fn2;
        fn2 = prevFn1 + fn2;
        i ++
    }

    return fn1
}

// フィボナッチ数列
// easy
// Jack は魔法使いからもらった豆を裏庭に植えて昼寝をしました。昼寝から目覚めて裏庭を確認するとその豆は巨木へと成長し、雲の上にある巨人の城にたどりつくまでの大きさになっていました。豆を観察すると、以下の条件で 1 秒ずつ成長することがわかりました。

// f(0) = 0

// 　
// f(1) = 1

// 　
// f(n) = f(n-1) + f(n-2) (n ≥ 2)

// 整数 n が与えられるので、n 秒後の木の高さを求める、fibonacci という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer n

// 出力のデータ型： integer

// fibonacci(5) --> 5

// fibonacci(9) --> 34

// fibonacci(10) --> 55

// fibonacci(19) --> 4181