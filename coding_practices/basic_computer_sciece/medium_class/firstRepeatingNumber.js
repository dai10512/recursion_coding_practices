function firstRepeatingNumber(nums){
    // 関数を完成させてください
    let hashMap = {}
    for(let i = 0;  i < nums.length; i ++){
        if(hashMap[nums[i]] === undefined){
            hashMap[nums[i]] = 1
        }
        else{
            hashMap[nums[i]] ++
        }
    }

    let keys = Object.keys(hashMap)
    let min = -1

    for(let i = 0;  i < keys.length; i ++){
        if(hashMap[keys[i]] > 1 && min == -1 ){
            min = keys[i]
        }
        else if(hashMap[keys[i]] > 1 && min != -1 && keys[i] < min){
            min = keys[i]
        }
    }

    return min
}

// 重複の要素
// easy
// 整数で構成される配列 nums が与えられるので、複数回出現する要素のうち、配列内でのインデックスが最も小さい要素を返す firstRepeatingNumber という関数を作成してください。重複した要素がない場合、-1 を返してください。

// 関数の入出力例

// 入力のデータ型： integer[] nums

// 出力のデータ型： integer

// firstRepeatingNumber([2,12,5,10,9,8]) --> -1

// firstRepeatingNumber([1,5,3,4,3,1,6]) --> 1

// firstRepeatingNumber([11,45,32,75,88,15,15]) --> 15