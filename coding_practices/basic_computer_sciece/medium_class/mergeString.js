function mergeString(s1,s2){
    // 関数を完成させてください
    let totalString = ''
    for(let i = 0; i < s1.length; i++){
        totalString += s1[i]+s2[i]
    }
    return totalString
}

// 文字列の合体
// easy
// Valerie は与えられた文字カードを並べて、単語を作るカードゲームを開発しています。ゲーム中に、2 人のプレイヤーの手札を交互に並べる処理をつける予定です。空白を含まない、サイズが同じ文字列 s1 と s2 が与えられるので、それぞれの手札のカードを s1->s2 の順序で交互に組み合わせる、mergeString という関数を再帰を使って作成してください。

// 関数の入出力例

// 入力のデータ型： string s1, string s2

// 出力のデータ型： string

// mergeString("abc","def") --> adbecf

// mergeString("hello","world") --> hweolrllod

// mergeString("a","b") --> ab