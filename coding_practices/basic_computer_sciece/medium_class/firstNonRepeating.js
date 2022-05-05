function firstNonRepeating(s){
    // 関数を完成させてください
    let hashMap = {}
    for(let i =0; i < s.length ; i ++){
        if(hashMap[s[i]] === undefined) hashMap[s[i]] = 1
        else hashMap[s[i]] ++
    }

    console.log(hashMap)

    let keys = Object.keys(hashMap)

    console.log(keys)
    
    let onceChar = ''
    let result = -1

    for(let i =0; i < keys.length ; i ++){
        if(hashMap[keys[i]] == 1){
            onceChar = keys[i]
            break
        }
    }

    console.log(onceChar)

    for(let i =0; i < s.length ; i ++){
        if(s[i] == onceChar){
            result = i
            break
        }
    }

    return result
}



// 復習のお知らせ機能
// medium
// Zollar は算数の計算練習ができるサイトを立ち上げました。そのサイトは a 問題から z 問題まで 26 個の問題があります。このサイトには復習機能がついており、1 回しか解いていない問題をトップページの一番上に表示するようにしました。あるユーザーが解いたことのある問題一覧を表す小文字によって構成される文字列 s が与えられるので、その中で 1 番最初に出てくる 1 回しか解いたことがない問題をインデックスで返す、firstNonRepeating という関数を定義してください。当てはまる文字がない場合は -1 を返してください。

// 関数の入出力例

// 入力のデータ型： string s

// 出力のデータ型： integer

// firstNonRepeating("aabbcdddeffg") --> 4

// firstNonRepeating("abcdabcdf") --> 8

// firstNonRepeating("abcddaebcdf") --> 6

// firstNonRepeating("aabbbccdd") --> -1

// firstNonRepeating("ddecdfgf") --> 2

// firstNonRepeating("abcdeeff") --> 0

// firstNonRepeating("zzcbdefghafhgbbcd") --> 5