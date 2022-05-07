function doubledArray(arr){
    // 関数を完成させてください
    let mid = Math.floor(arr.length/2)

    let leftTotal = getdouble(arr,0,mid)
    let rightTotal = getdouble(arr,mid, arr.length)

    console.log(leftTotal)
    console.log(rightTotal)

    let totalList = []
    totalList.push(leftTotal)
    totalList.push(rightTotal)

    return totalList
}

function getdouble(arr,start,end){
    let doubleList = []
    
    for(let i = start; i < end; i++){
        doubleList.push(arr[i]*2)
    }
    return doubleList
}



// 配列の要素を2倍
// easy
// 整数で構成される配列 arr が与えられるので、配列の各要素を 2 倍にして返す doubledArray という関数を分割統治法を用いて実装してください。

// 関数の入出力例

// 入力のデータ型： integer[] arr

// 出力のデータ型： integer[]

// doubledArray([1,2,3,4,5]) --> [2,4,6,8,10]

// doubledArray([5,4,3,2,1]) --> [10,8,6,4,2]