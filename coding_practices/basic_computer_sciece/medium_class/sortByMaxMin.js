function sortByMaxMin(arr){
    // 関数を完成させてください
    let sortedArr = []
    let max = 0;
    const originalLength = arr.length

    // get sorted
    while(arr.length != 0){     
        // find max
        for(let i = 0; i < originalLength; i ++){
            if(arr[i] >= max){
                max = arr[i]
            }
        }
        // insert max to sortedArr and reject maf from arr
        for(let j = 0; j < originalLength; j++){
            if(arr[j] == max){

                arr.splice(j,1)
                sortedArr.unshift(max)
                
                break
            }   
        }
        max = 0
    }
    let result = []
    for(let k = 0; k < originalLength; k++){
        result.unshift(sortedArr[originalLength-1-k])
        result.unshift(sortedArr[k])
    }
    result.splice(originalLength,originalLength)

    return result
}


// 特殊な並べ替え
// medium
// 整数によって構成される配列が与えられるので、最初の最大値の後に最初の最小値、2 番目の最大値の後に 2 番目の最小値、といったように値を並べ替えてから返す sortByMaxMin という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer[] arr

// 出力のデータ型： integer[]

// sortByMaxMin([6,2,3,5,8,4]) --> [8,2,6,3,5,4]

// sortByMaxMin([11,15,9,7,12]) --> [15,7,12,9,11]

// sortByMaxMin([85,69,56,61,78]) --> [85,56,78,61,69]

// sortByMaxMin([1,2,3]) --> [3,1,2]