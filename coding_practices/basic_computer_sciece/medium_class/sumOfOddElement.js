function sumOfOddElement(arr){
    // 関数を完成させてください
    count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2 != 0){
            count += arr[i]
            console.log(arr[i])
        }
    }
    return count
}



// 奇数番目の合計値
// very easy
// 整数で構成される配列が与えられるので、奇数の合計値を計算する sumOfOddElement という関数を定義してください。

// 関数の入出力例

// 入力のデータ型： integer[] arr

// 出力のデータ型： integer

// sumOfOddElement([2,4,3,8,11]) --> 14

// sumOfOddElement([1]) --> 1

// sumOfOddElement([21,4,436,85,182,169]) --> 275