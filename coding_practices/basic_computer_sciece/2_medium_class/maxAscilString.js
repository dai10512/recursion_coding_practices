function maxAscilString(stringList){
    // 関数を完成させてください
    let totalList = []

    for(let i = 0; i< stringList.length ; i++){
        let word = stringList[i].toLowerCase()
        let eachTotal = 0
        
        for(let j = 0; j < word.length ; j++){
            eachTotal += word[j].charCodeAt()
        }
        console.log(eachTotal)
        totalList.push(eachTotal)
        eachTotal = []
    }

    let piece = 0
    let max = 0
    for(let i = 0; i< totalList.length ; i++){
        if(totalList[i] > max){
            max = totalList[i]
            piece = i
        }
    }
    return piece
}

// 最大文字列
// easy
// Miles は英単語カードを持って勉強していましたが、手元にある単語を文字コードへ変換した時、最も大きい値が何になるか気になりました。英単語カード stringList が与えられるので、最も値が大きくなった単語が何枚目にあるかを返す maxAscilString という関数を定義してください（ここでは初めの値を 0 枚目とします）。ただし、以下の条件に気をつけてください。

// - 文字列に含まれるそれぞれの文字を文字コードによって 10 進数へと変換し、足し合わせる。（例："abc" は文字コードによって、a = 97、b = 98、c = 99 へと変換され、全部足し合わせて 294 と計算されます）

// 　
// - 大文字と小文字の区別はありません。（例：'A' == 'a' == 97となる）

// 関数の入出力例

// 入力のデータ型： string[] stringList

// 出力のデータ型： integer

// maxAscilString(["Fantastic","Bridge","Superior","Fantastic","Operator"]) --> 0

// maxAscilString(["HeLlo","HelLo","bridge"]) --> 2

// maxAscilString(["eatDjrPNbj","IehUUSEMVe","hpcbBvlTOc","egvnPZgyCh"]) --> 3

// maxAscilString(["egvnPZgyCh","bridge","Fantastic"]) --> 0