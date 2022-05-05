function listIntersection(targetList,searchList){
    // 関数を完成させてください
    let cache = []
    let sortedCache = []
    let hashMap = {}
    let shashMap = {}

    for(let i = 0; i < targetList.length; i++){
        hashMap[targetList[i]] = targetList[i]
    }
    console.log(hashMap)
    for(let i = 0; i < searchList.length; i++){
        if(hashMap[searchList[i]] !== undefined && shashMap[searchList[i]] === undefined){
            cache.push(searchList[i])
            shashMap[searchList[i]] = searchList[i]
        }
    }

    // sort
    let max = cache[0]
    let maxPosition = 0
    
    while(cache.length > 0){
        for(let i = 0; i < cache.length; i++){
            if(cache[i] >= max){
                max = cache[i]
                maxPosition = i
            }
        }
        sortedCache.unshift(max)
        cache.splice(maxPosition,1)
        max = 0
    }
    return sortedCache
}

// 配列の交点
// easy
// 数値で構成される配列 targetList と searchList が与えられるので、両方のリストの全ての交点を返す listIntersection という関数を定義してください。ただし、交点は昇順で重複がない状態で返してください。

// 関数の入出力例

// 入力のデータ型： integer[] targetList, integer[] searchList

// 出力のデータ型： integer[]

// listIntersection([1,2,3,4,5,6],[1,4,4,5,8,9,10,11]) --> [1,4,5]

// listIntersection([3,4,5,10,2,20,4,5],[4,20,22,2,2,2,10,1,4]) --> [2,4,10,20]

// listIntersection([2,3,4,54,10,5,9,11],[3,10,23,10,0,5,9,2]) --> [2,3,5,9,10]