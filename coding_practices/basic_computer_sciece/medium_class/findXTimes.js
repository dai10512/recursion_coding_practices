function findXTimes(teams){
    // 関数を完成させてください

    let hashMap = {}

    for(let i= 0;i < teams.length; i ++){
        if(hashMap[teams[i]] === undefined) hashMap[teams[i]] = 1 
        else hashMap[teams[i]] ++ 
    }

    console.log(hashMap)

    let keys = Object.keys(hashMap)
    let currentCount = hashMap[keys[0]]
    let result = true

    console.log(keys)

    for(let i= 0;i < keys.length; i ++){
        if(hashMap[keys[i]] != currentCount){
            result = false
            break
        }
    } 
    return result
}



// x回出現
// easy
// Block は野球のリーグ戦で運営を行なっており、試合の組み合わせを考えています。a チームから z チームまでの 26 チームが存在し、全チームが同じ数だけ試合をするようにしなければいけません。Block は試合が行われるチームを発見するたびに、そのチーム名を記録しています（a チームを発見した場合は a が追加され、"aabcbcdda" のような記録ができます）。試合を行なったチーム一覧 teams が与えられるので、全てのチームが同じ数だけ試合をしているかどうか判定する findXTimes という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： string teams

// 出力のデータ型： bool

// findXTimes("bacddc") --> false

// findXTimes("babcddc") --> false

// findXTimes("babacddc") --> true

// findXTimes("aaabbbcccddd") --> true

// findXTimes("aaabbccdd") --> false

// findXTimes("zadbchvwxbwhdxvcza") --> true

// findXTimes("zadbchvwxbwhdxvczb") --> false

// findXTimes("zab") --> true

// findXTimes("z") --> true