function isPalindromeInteger(n){
    // 関数を完成させてください
    answer = true
    strNumber = n.toString()
    l = strNumber.length
    for(i=0;i<l;i++,l--){
        leftNumber = parseInt(strNumber[i])
        rightNumber = parseInt(strNumber[l-1])
        if(rightNumber != leftNumber){
            answer = false
        }
    }
    return answer
}




// 回文（数値）
// easy
// Jack はある会社に入社し、新しい社員 ID を発行することになりました。ID は数字のみで作られ、必ず回文でなければならないという制約がついています。新しい ID である自然数 n が与えられるので、それが回文になっているかどうかを調べる isPalindromeInteger という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer n

// 出力のデータ型： bool

// isPalindromeInteger(12222) --> false

// isPalindromeInteger(12321) --> true

// isPalindromeInteger(22782) --> false

// isPalindromeInteger(189981) --> true

// isPalindromeInteger(1) --> true

// isPalindromeInteger(987823) --> false