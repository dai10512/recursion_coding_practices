function hammingDistanceInString(string1,string2){
    // 関数を完成させてください
    count = 0
    for(let i = 0; i < string1.length; i++){
        if(string1[i] != string2[i]){
            count += 1;
        }  
    }
    return count
}

// ハミング距離（文字列）
// very easy
// Barbara は友達と伝言ゲームをすることにしました。最初の人が 1 つの英単語 string1 を伝達したのですが、最終的には string2 という英単語として伝わりました。この 2 つの英単語の文字数は同じでしたが、果たしてどれくらいスペルの違いがあったでしょうか。2 つの文字列のハミング距離を返す、hammingDistanceInString という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： string string1, string string2

// 出力のデータ型： integer

// hammingDistanceInString("toned","roses") --> 3

// hammingDistanceInString("toned","toned") --> 0

// hammingDistanceInString("cats","dogs") --> 3

// hammingDistanceInString("dogandcat","catanddog") --> 6

// hammingDistanceInString("AABBCCDD","AAAACCCC") --> 4