function getAscii(s){
    // 関数を完成させてください
    let hashMap = {}
    for(let i=0;i<s.length;i++){
        if(s[i] != ' ' ){
            if(hashMap[s[i]] === undefined) hashMap[s[i]] = 1
            else hashMap[s[i]] ++
        }
    }

    let keys = Object.keys(hashMap)

    let maxValue = 0
    let maxAlphabet = null

    for(let i = 0; i < keys.length; i++){
        if(hashMap[keys[i]] > maxValue) {

            maxValue = hashMap[keys[i]]
            maxAlphabet = keys[i]

        }
        else if(hashMap[keys[i]] == maxValue && keys[i].charCodeAt() > maxAlphabet.charCodeAt()){
            maxValue = hashMap[keys[i]]
            maxAlphabet = keys[i]

        }
    }

    return maxAlphabet.charCodeAt()
}

// 占いサイト
// easy
// Grey は占い診断を行うサイトを開発しています。そこでは自由に文字列を打ち込んでもらい、一番多く出現したの文字の ASCII コードによって診断結果を変える仕組みにします。空白を含まない文字列 string が与えられるので、最も多く出現した文字の ASCII コードを返す、getAscii という関数を作成してください。ただし、出現する回数が同じ場合は、大きい ASCII コードを持つ文字を優先してください。

// 関数の入出力例

// 入力のデータ型： string s

// 出力のデータ型： integer

// getAscii("recursion") --> 114

// getAscii("helloworld") --> 108

// getAscii("worldWideWeb") --> 101

// getAscii("aAaAAa") --> 97

// getAscii("aKLDdejoIENDEONCEabkfspbcdeMALSOEWL") --> 69

// getAscii("aabbccddee") --> 101

// getAscii("abcd") --> 100

// getAscii("abcdabcd") --> 100

// getAscii("Aa!!!!!@@@aa") --> 33