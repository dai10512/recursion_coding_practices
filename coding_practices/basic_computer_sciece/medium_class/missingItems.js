function missingItems(listA,listB){
    // 関数を完成させてください

    let hashMap = {}
    
    for(let i = 0 ; i < listB.length; i++){
        hashMap[listB[i]] = listB[i]        
        // if(hashMap[listA[i]] === undefined) 
    }

    let noList = []

    for(let i = 0 ; i < listA.length; i++){
        if(hashMap[listA[i]]  === undefined) noList.push(listA[i]) 
    }
    console.log(hashMap)
    return noList
}



// ショッピングリスト
// easy
// Whalum は兄が買うものはなんでも欲しがる性格です。兄弟で一緒にネットショッピングをするときも、兄が買うものと同じものを買おうとしていました。兄の注文リスト listA と Whalum の注文リスト listB が与えられるので、兄が買うもので Whalum の注文リストに入ってないものを返す、missingItems という関数を作成してください。もし、被りが一切存在しない時は、兄の注文リストをそのまま返してください。

// 関数の入出力例

// 入力のデータ型： integer[] listA, integer[] listB

// 出力のデータ型： integer[]

// missingItems([1,2,3,4,5,6,7,8],[1,3,5]) --> [2,4,6,7,8]

// missingItems([1,2,3,4,5],[1,2]) --> [3,4,5]

// missingItems([1,1],[2,2]) --> [1,1]

// missingItems([9,8,7,6,5],[1,2]) --> [9,8,7,6,5]

// missingItems([1,2],[9,8,7,6,5]) --> [1,2]

// missingItems([3,4,5,1,2],[1,2]) --> [3,4,5]

// missingItems([8,3,45,67,23,9,3],[5,7]) --> [8,3,45,67,23,9,3]

// missingItems([8,3,45,67,23,9,3],[5,45]) --> [8,3,67,23,9,3]

// missingItems([8,3,45,67,23,9,3],[3]) --> [8,45,67,23,9]

// missingItems([8,3,45,67,23,9,3],[]) --> [8,3,45,67,23,9,3]