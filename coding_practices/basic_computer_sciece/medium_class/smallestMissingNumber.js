function smallestMissingNumber(arr){
    // 関数を完成させてください
    return smallestMissingNumberHelper(arr,0,arr.length)
}

function smallestMissingNumberHelper(arr,start,end){
    let result = 0
    if(start == end) {
        return start
    }

    let midInt = Math.floor((start+end)/2)
    let midValue = arr[midInt]

    if(midInt != midValue){
        result = smallestMissingNumberHelper(arr,0,midInt)
    }
    else{
        result = smallestMissingNumberHelper(arr,midInt+1,end)
    }

    return result
}



// 0 ~ M-1 の範囲でユニークな要素を持つ N 個のソートされた配列（M > N）が与えられるので、その中で最も小さい欠番を返す smallestMissingNumber という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer[] arr

// 出力のデータ型： integer

// smallestMissingNumber([0,2,3,4,6]) --> 1

// smallestMissingNumber([0,1,2,3,5]) --> 4

// smallestMissingNumber([0,1,2,3,4]) --> 5