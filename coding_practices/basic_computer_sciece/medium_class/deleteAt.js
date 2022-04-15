function deleteAt(s,i){
    // 関数を完成させてください
    left = s.substring(0,i-1)
    right = s.substring(i,s.length)
    return (i > s.length) ? s :left + right
}

// 文字削除
// easy
// Tony は上司からドキュメントの修正を指示されました。自身が作成した膨大な数のドキュメントを、一から修正するのは大変なので、指摘された部分だけを削除するプログラムを作成しようと思いました。文字列 string と数値 i が与えられるので、i 番目の文字が削除された文字列を返す、deleteAt という関数を作成してください。数値 i が受け取った文字列のサイズより大きい場合は、文字列をそのまま返します。

// 関数の入出力例

// 入力のデータ型： string s, integer i

// 出力のデータ型： string

// deleteAt("abcdefg",4) --> abcefg

// deleteAt("abcdefg",6) --> abcdeg

// deleteAt("abcdefg",7) --> abcdef

// deleteAt("abcdefg",8) --> abcdefg

// deleteAt("recursion",3) --> reursion

// deleteAt("Rolling in the park",6) --> Rollig in the park