function joinWords(stringArr,delimiter){
    // 関数を完成させてください
    let　result = '' 

    for(let i = 0;i < stringArr.length-1;i++){
        result += stringArr[i]+delimiter
    }

    result += stringArr[stringArr.length-1]

    return result
}

// 文字列へ変換
// easy
// Mat は文章作成に便利なツールを開発しています。そこで、ユーザーがいくつか文字列を入力した後に、単語ごとに自動で区切りを入れる機能を実装予定です。入力された文字列の一覧である stringArr が配列として与えられるので、文字列ごとにカンマやスペースなどの区切り delimiter を入れて文章として返す、joinWords という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： string[] stringArr, char delimiter

// 出力のデータ型： string

// joinWords(["hello","goodbye","morning"],',') --> hello,goodbye,morning

// joinWords(["The","tech","giant","is in the","city"],' ') --> The tech giant is in the city

// joinWords(["The","tech","giant","is in the","city"],'_') --> The_tech_giant_is in the_city