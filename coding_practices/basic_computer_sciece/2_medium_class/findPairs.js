
function findPairs(numbers){
    // 関数を完成させてください
    let hashMap = {}

    for (let i = 0;i < numbers.length; i ++){
        if(hashMap[numbers[i]] === undefined) hashMap[numbers[i]] = 1
        else hashMap[numbers[i]] ++
    }

    let keys = Object.keys(hashMap)
    let unsortedResultList = []

    for (let i = 0;i < keys.length; i ++){
        if(hashMap[keys[i]] == 2) unsortedResultList.push(keys[i])
    }

    let max = unsortedResultList[0]
    let maxPosition = 0
    let sortedResultList = []
    
    while(unsortedResultList.length > 0){
        for(let i = 1; i < unsortedResultList.length; i ++){

            if(Number(unsortedResultList[i]) > max){
                max = unsortedResultList[i]
                maxPosition = i
            }
        }

        sortedResultList.unshift(max)
        unsortedResultList.splice(maxPosition,1)
        
        max =  unsortedResultList[0]
        maxPosition = 0
    }

    return sortedResultList
}

// ペアチケット
// easy
// ある学校では文化祭のときに、生徒全員に数字をランダムに配っています。そして同じ数字同士を持つペアが現れたら、テーマパークのペアチケットをプレゼントしています（3 人以上いたら適応外になります）。生徒たちが持っている数字 numbers が与えられるので、ペアになる生徒たちの数字を返す findPairs という関数を作成してください。配列は昇順で返してください。

// 関数の入出力例

// 入力のデータ型： integer[] numbers

// 出力のデータ型： integer[]

// findPairs([10,12,13,14,15,16,16,7,7,8]) --> [7,16]

// findPairs([1,1]) --> [1]

// findPairs([1,2]) --> []

// findPairs([1,2,3,4,5,6,6,7,7,8]) --> [6,7]

// findPairs([1,3,6,3,1,4,6,4]) --> [1,3,4,6]

// findPairs([3,3,-1,-1,1,6,6,4,4]) --> [-1,3,4,6]

// findPairs([30,30,30,30,1,600,600,40,40,40]) --> [600]