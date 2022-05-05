function hasSameType(user1,user2){
    // 関数を完成させてください
    let result = true

    let hashMap12 = {}

    if(user1.length != user2.length){
        result = false
        return false
    }

    for(let i =0; i < user1.length; i++){
        if(hashMap12[user1[i]] === undefined){
            hashMap12[user1[i]] = user2[i]
        }
        else{
            if(hashMap12[user1[i]] != user2[i]){
                console.log(i)
                console.log('overtwice')
                result = false
                break
            }
        }
        
    }

    if(!result){
        return result
    }

    let keys1 = Object.keys(hashMap12)

    for(let i =0; i < keys1.length; i++){
        for(let j =i+1; j < keys1.length; j++){
            if(hashMap12[keys1[i]] == hashMap12[keys1[j]]){
                console.log('i:' + i + ':' + keys1[i])
                console.log('j' + j + ':' + keys1[j])
                result = false
                break
            }
        }
    }
    return result        
}



// マッチングアプリ
// medium
// Redd はマッチングアプリを開発しています。ユーザーの属性をアルファベットで記録しており、アルファベットの並ぶパターンが同じユーザーは相性が良いと判定しています。ユーザー1 の属性 user1、ユーザー2 の属性 user2 が与えられるので、この 2 つが同じパターンをしているかどうか判定する、hasSameType という関数を定義してください。

// 関数の入出力例

// 入力のデータ型： string user1, string user2

// 出力のデータ型： bool

// hasSameType("aabb","yyza") --> false

// hasSameType("aappl","bbtte") --> true

// hasSameType("aappl","bbttb") --> false

// hasSameType("aabb","abab") --> false

// hasSameType("aappl","bktte") --> false

// hasSameType("aaapppl","bbbttke") --> false

// hasSameType("abcd","tso") --> false

// hasSameType("abcd","jklm") --> true

// hasSameType("aaabbccdddaa","jjjddkkpppjj") --> true

// hasSameType("aaabbccdddaa","jjjddkkpppjd") --> false