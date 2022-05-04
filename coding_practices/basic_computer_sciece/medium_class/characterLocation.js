function characterLocation(commands){
    // 関数を完成させてください
    let moveMap = {
        'N':[0,1],
        'E':[1,0],
        'W':[-1,0],
        'S':[0,-1]
    }

    let totalX = 0
    let totalY = 0

    for(let i = 0 ; i < commands.length; i ++){
        if(moveMap[commands[i]]){
            totalX += moveMap[commands[i]][0]
            totalY += moveMap[commands[i]][1]
        }
    }

    let result =[]
    result.push(totalX)
    result.push(totalY)

    return result

}

// キャラクター操作
// easy
// Steele はシミレーションゲームで遊んでおり、4 方向（North, East, South, West）に 1 マスずつ指示出しすることでキャラクターを動かしています。コマンドを表す大文字の文字列 commands が与えられるので、指示出しを与えられた後の位置を配列で返す、characterLocation という関数を作成してください。ただし、キャラクターは原点（0,0）からスタートするとします。コマンドの進行方向は、N: y 方向に +1、E: x 方向に +1、W: x 方向に -1、S: y 方向に -1 となります。

// 関数の入出力例

// 入力のデータ型： string commands

// 出力のデータ型： integer[]

// characterLocation("NNNN") --> [0,4]

// characterLocation("NESW") --> [0,0]

// characterLocation("NW") --> [-1,1]

// characterLocation("AWFGMD") --> [-1,0]

// characterLocation("NSSNWENSSNNN") --> [0,2]