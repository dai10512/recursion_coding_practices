function getMaxIndex(arr){
    // 関数を完成させてください
    result = 0
    maxCount = arr[0]
    for(let i =1 ; i < arr.length ; i ++){
        if(arr[i] >= maxCount){
            maxCount = arr[i]
            result = i
        }
    }
    return result
}

// 最大値のインデックス
// very easy
// 整数で構成される配列が与えられるので、最大値のインデックスを返す getMaxIndex という関数を定義してください。ただし、最大値が複数存在する場合は、一番最後の要素を優先してください。

// 関数の入出力例

// 入力のデータ型： integer[] arr

// 出力のデータ型： integer

// getMaxIndex([2,4,3,8,11]) --> 4

// getMaxIndex([1]) --> 0

// getMaxIndex([21,4,436,85,182,169]) --> 2