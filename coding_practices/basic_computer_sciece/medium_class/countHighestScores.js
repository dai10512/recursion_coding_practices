function countHighestScores(scores){
    // 関数を完成させてください
    let hashMap = {}

    for(let i =0; i < scores.length; i ++){
        if(hashMap[scores[i]] === undefined) hashMap[scores[i]] = 1
        else hashMap[scores[i]] ++
    }
    let keys = Object.keys(hashMap)

    result = hashMap[keys[keys.length-1]] 

    return result
}

// 最大値の個数
// easy
// 教員の Marjamaa はテストで最高得点取った生徒が何人いるか数えようと思いました。生徒の点数一覧 scores が与えられるので、その中に含まれる最大値の数を返す countHighestScores という関数を作成してください。（例：[10,2,3,4,5,6,10,10,10,6,7] が与えられたとき、最大値 10 の個数である 4 を返します。）

// 関数の入出力例

// 入力のデータ型： integer[] scores

// 出力のデータ型： integer

// countHighestScores([10,2,3,4,5,6,10,10,10,6,7]) --> 4

// countHighestScores([10,-1]) --> 1

// countHighestScores([10,10,10,10,10]) --> 5

// countHighestScores([1000,10000,8000,300,200]) --> 1

// countHighestScores([10,3,4,5,2,6,7,4,7,2,2,2]) --> 1a