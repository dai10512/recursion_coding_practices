function canMakeTargetVal(arr,target){
    // 関数を完成させてください
    let result = false

    for(let i = 0;i < arr.length; i ++){
        for(let j = i + 1 ;j < arr.length; j ++){
            if((arr[i] + arr[j]) == target){
                result = true
                break
            }
        }
    }
    return result
}


// 合計値が等しい
// easy
// 整数によって構成される配列と整数 target が与えられるので、配列の中の 2 つの要素を足した合計がちょうど target と等しくなる値が存在すれば true を返し、存在しなければ false を返す canMakeTargetVal という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer[] arr, integer target

// 出力のデータ型： bool

// canMakeTargetVal([3,4,2,5,1],15) --> false

// canMakeTargetVal([4,11,23,9,6],20) --> true

// canMakeTargetVal([23,14,65,71,2],2) --> false