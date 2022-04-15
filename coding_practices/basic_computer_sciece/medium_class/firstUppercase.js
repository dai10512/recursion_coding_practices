function firstUppercase(s){
    // 関数を完成させてください
    return (upper(s))? upper(s): 'No upper'
}

function upper(s){
    for(let i = 0; i < s.length; i ++){
        if(s[i] != ' '){
            if(s[i].toUpperCase() == s[i]){
                return s[i]
            }
        }
    }
}


// はじめての大文字
// easy
// Gail は出版社で文章校正を担当しており、全て小文字にする予定の文章に大文字が混ざっていないか確認しています。文章 s が与えられるので、最初の大文字を返す、firstUppercase という関数を再帰を使って作成してください。ただし、大文字が含まれない場合は、"No upper" と返してください。

// 関数の入出力例

// 入力のデータ型： string s

// 出力のデータ型： string

// firstUppercase("aBcdE") --> B

// firstUppercase("abcde") --> No upper

// firstUppercase(" A") --> A

// firstUppercase("hello WorLD") --> W

// firstUppercase("ABCDE") --> A