function fibonacciTotal(n){
    // 補助関数を使用し、初期値 0, 1 を追加します
     if(n <= 1){
        return n
    }
    return fibonacciTotalHelper(0,1,n) + fibonacciTotal(n-1);
}

function fibonacciTotalHelper(fn1, fn2, n){
    if(n < 1) {
        return fn1;
    }

    return fibonacciTotalHelper(fn2, fn1+fn2, n-1);
}

// function fibonacciTotal(n){
//     if(n <= 1){
//         return n
//     }
// 　　　　return fibonacci(n) + fibonacciTotal(n-1)
// }

// function fibonacci(n){
//     if(n <= 1){
//         return n
//     }
//     return fibonacci(n-1) + fibonacci(n-2)
// }

// フィボナッチの合計
// easy
// 自然数 n が与えられるので、フィボナッチ数列の n 項目までの総和を返す、fibonacciTotal という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer n

// 出力のデータ型： integer

// fibonacciTotal(5) --> 12

// fibonacciTotal(9) --> 88

// fibonacciTotal(10) --> 143

// fibonacciTotal(19) --> 10945

// fibonacciTotal(30) --> 2178308