function insertUnderscoreAt(s,i){
    // 関数を完成させてください
    left = s.substring(0,i)
    right = s.substring(i,s.length)
    return (i >= s.length) ? s : left + '_' +right 
}

// 文字列 s と数値 i を受け取り、i 番目に「_」を入れた文字列を返す、insertUnderscoreAt という関数を作成してください。数値 i が受け取った文字列のサイズ以上の場合、文字列はそのまま返されます。

// 関数の入出力例

// 入力のデータ型： string s, integer i

// 出力のデータ型： string

// insertUnderscoreAt("stevejobs",8) --> stevejob_s

// insertUnderscoreAt("stevejobs",9) --> stevejobs

// insertUnderscoreAt("stevejobs",5) --> steve_jobs

// insertUnderscoreAt("stevejobs",0) --> _stevejobs

// insertUnderscoreAt("stevejobs",10) --> stevejobs

// insertUnderscoreAt("donaldtrump",6) --> donald_trump

// insertUnderscoreAt("Baseball is very fun.",5) --> Baseb_all is very fun.