function intersectionOfArraysRepeats(intList1,intList2){
    // 関数を完成させてください
    let hashMap = {}
    
    for(let i =0;i < intList1.length; i++){
        if(hashMap[intList1[i]] === undefined) hashMap[intList1[i]] = 1
        else hashMap[intList1[i]] +=1
    }

    console .log(hashMap)

    let newList = []

    for(let i =0;i < intList2.length; i++){
        if(hashMap[intList2[i]] > 0) {
            newList.unshift(intList2[i])
            hashMap[intList2[i]] --
        }
    }

    console.log(newList)

    let sortedNewList = []
    let max = newList[0] 
    let maxPoistion = 0

    while(newList.length > 0){
        for(let i =0;i < newList.length; i++){
            if(newList[i] >= max) {
                max = newList[i]
                maxPoistion = i
            }
        }
        sortedNewList.unshift(max)
        newList.splice(maxPoistion,1)
        max = newList[0]
    }

    return sortedNewList
}

// 配列の重複（区別あり）
// easy
// 整数で構成される配列 num1 と num2 が与えられるので、両方の配列に表示されている要素を小さい順で配列で返す、intersectionOfArraysRepeats という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer[] intList1, integer[] intList2

// 出力のデータ型： integer[]

// intersectionOfArraysRepeats([3,2,1],[3,2,1]) --> [1,2,3]

// intersectionOfArraysRepeats([1,1,1],[1,2,3,2,1]) --> [1,1]

// intersectionOfArraysRepeats([3,2,2,2,1,10,10],[3,2,10,10,10]) --> [2,3,10,10]

// intersectionOfArraysRepeats([2,19,11,2,6,8],[10,23,5,8,19]) --> [8,19]

// intersectionOfArraysRepeats([4,22,100,88,6,8],[1,2,3]) --> []

// intersectionOfArraysRepeats([-1,-2,-1,-1],[-1,-1,-2,-2]) --> [-2,-1,-1]

// intersectionOfArraysRepeats([1,2,2,1],[2,2,2,1]) --> [1,2,2]

// intersectionOfArraysRepeats([4,9,5],[9,4,9,8,4]) --> [4,9]