function countWords(sentence){
    // 関数を完成させてください
    count = 0
    for(let i = 0; i < sentence.length; i++){
        if(sentence[i] == ' '){
            count ++
        }
    }
    return count +1
}


// 単語のカウント
// very easy
// Jeffers は本の感想を共有できる web プラットフォームを開発しています。そこでは投稿の際、文章中にいくつ単語があるか見れるようになっています。英単語のみで構成された文章 sentence が与えられるので、そこに含まれる単語数をカウントする、countWords という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： string sentence

// 出力のデータ型： integer

// countWords("I would rather be a bird than a fish") --> 9

// countWords("He liked to play with words in the bathtub") --> 9

// countWords("word") --> 1

// countWords("For writers a random sentence can help them get their creative juices flowing") --> 13

// countWords("When I go to business school I remember I lost my key of house") --> 14