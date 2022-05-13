function mergeSort(arr){
    // 関数を完成させてください
    return mergeSortHelper(arr,0,arr.length-1)
}

function mergeSortHelper(arr,start,end){
    if(start === end) return [arr[start]]

    let mid = Math.floor((start+end)/2)
    let leftArr = mergeSortHelper(arr,start,mid) 
    let rightArr = mergeSortHelper(arr,mid+1,end)

    leftArr.push(Infinity)
    rightArr.push(Infinity)

    let newList = []
    let l = leftArr.length + rightArr.length-2
    let ri = 0
    let li = 0

    while(li+ri < l){
        if(leftArr[li] > rightArr[ri]){
            newList.push(rightArr[ri]) 
            ri++
        }
        else{
            newList.push(leftArr[li])
            li++
        }
    }
    return newList
}


// マージソート
// easy
// 整数で構成される配列 arr が与えられるので、マージソートアルゴリズムを実装し、配列を昇順で返す mergeSort という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer[] arr

// 出力のデータ型： integer[]

// mergeSort([2,12,5,10,9,8]) --> [2,5,8,9,10,12]

// mergeSort([1,5,3,4,3,1,6]) --> [1,1,3,3,4,5,6]

// mergeSort([11,45,32,75,88,15,15]) --> [11,15,15,32,45,75,88]