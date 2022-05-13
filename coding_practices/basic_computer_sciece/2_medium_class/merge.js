function merge(leftArr,rightArr){
    // 関数を完成させてください

    leftArr.push(Infinity)
    rightArr.push(Infinity)

    let l =leftArr.length + rightArr.length -2
    let li = 0
    let ri = 0

    let newList = []

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

// 配列の合体
// easy
// 整数で構成される配列 leftArr と rightArr が与えられます。2 つの配列はすでにソートされているので、2 つの配列をマージし、小さい順に並べられた配列を返す merge という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer[] leftArr, integer[] rightArr

// 出力のデータ型： integer[]

// merge([3,4,7,9,15],[0,1,2,8,19]) --> [0,1,2,3,4,7,8,9,15,19]

// merge([14,32,62,77],[10,29,32,45]) --> [10,14,29,32,32,45,62,77]

// merge([1,2,3,4,6],[5,7,8,9,10]) --> [1,2,3,4,5,6,7,8,9,10]