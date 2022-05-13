function countSubstring(string){
    // 関数を完成させてください
    count = string.length
    for(let i = 0; i <= string.length; i++){
        console.log(1)
        for(x = i+1; x <= string.length; x++){
            if(string[i] == string[x]){
              count++
            }
        }
    }
    return count
}


// 最初と最後の文字が同じ部分文字列
// medium
// Nordley は同じ文字で始まって同じ文字で終わる文章を多く含ませる文学作品の存在を知り、興味を持ちました。そこで、そのような表現が最も多い作品は何か調べようと思いました。文字列 string が与えられるので、部分文字列の中で最初と最後が同じ文字で終わる文字列の個数を返す、countSubstring という関数を再帰を使って作成してください。

// 例えば、"aba" では、a, b, a, aba の 4 つの部分文字列が条件に合致します。

// 関数の入出力例

// 入力のデータ型： string string

// 出力のデータ型： integer

// countSubstring("a") --> 1

// countSubstring("aa") --> 3

// countSubstring("aaa") --> 6

// countSubstring("abc") --> 3

// countSubstring("aba") --> 4

// countSubstring("abcab") --> 7

// countSubstring("abcaba") --> 10

// countSubstring("helloworld") --> 14