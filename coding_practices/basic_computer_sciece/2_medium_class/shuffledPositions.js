function shuffledPositions(arr,shuffledArr){
    // 関数を完成させてください
    let cache = []

    
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < shuffledArr.length; j++){
            if(arr[i]==shuffledArr[j]){
                cache.push(j)
            }
        }
    }

    return cache
}


// 配列のシャッフル
// easy
// mith は間違い探しゲームに参加しました。異なる数字が並べられているボード arr と同じ数字がシャッフルされたボード shuffledArr が与えられるので、shuffledArr に対して arr がどこのインデックスへ移動したかを返す、shuffledPositions という関数を定義してください。

// 関数の入出力例

// 入力のデータ型： integer[] arr, integer[] shuffledArr

// 出力のデータ型： integer[]

// shuffledPositions([2,32,45],[45,32,2]) --> [2,1,0]

// shuffledPositions([10,11,12,13],[12,10,13,11]) --> [1,3,0,2]

// shuffledPositions([10,11,12,13],[10,11,12,13]) --> [0,1,2,3]

// shuffledPositions([1350,181,1714,375,1331,943,735],[1714,1331,735,375,1350,181,943]) --> [4,5,0,3,1,6,2]