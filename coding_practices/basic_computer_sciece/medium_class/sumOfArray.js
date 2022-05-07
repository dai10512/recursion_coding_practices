function sumOfArray(arr){
    // 関数を完成させてください
    let halfLength = Math.floor(arr.length)
    console.log(halfLength)

    let leftSum = getSum(arr,0,halfLength)
    let rightSum = getSum(arr,halfLength+1,arr.length)

    return leftSum + rightSum
}

function getSum(arr,start,end){
    let count = 0
    for(let i = start; i < end; i ++){
        count += arr[i]
    }
    return count
}



// 配列の合計値
// easy
// 整数で構成される配列が与えられるので、配列の合計値を返す sumOfArray という関数を分割統治法を用いて実装してください。

// 関数の入出力例

// 入力のデータ型： integer[] arr

// 出力のデータ型： integer

// sumOfArray([2,4,6,8,10]) --> 30

// sumOfArray([0]) --> 0

// sumOfArray([2,4,6,8,10,12]) --> 42