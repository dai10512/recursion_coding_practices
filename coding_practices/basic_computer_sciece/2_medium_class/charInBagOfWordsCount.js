
function charInBagOfWordsCount(bagOfWords,keyCharacter){
    // 関数を完成させてください
    let totalWords = ''
    let count = 0
    console.log(bagOfWords.length)

    for(let i = 0;i < bagOfWords.length; i++){
        totalWords += bagOfWords[i]
    }

    for(let i = 0;i < totalWords.length; i++){
        if(totalWords[i] == keyCharacter){
            count++
        }
    }
    return count
}

// 単語内の文字カウント
// easy
// Herbie は小学生向けに英語のゲームを作りました。単語が入っているバッグを用意し、単語の中に含まれる特定のアルファベットをカウントしていくというものです。単語のリスト bagOfWords とアルファベット keyCharacter が与えられるので、単語の中に特定のアルファベットが何回現れるかを返す、charInBagOfWordsCount という関数を定義してください。

// 関数の入出力例

// 入力のデータ型： string[] bagOfWords, char keyCharacter

// 出力のデータ型： integer

// charInBagOfWordsCount(["hello","world"],'o') --> 2

// charInBagOfWordsCount(["hello","world"],'p') --> 0

// charInBagOfWordsCount(["The","tech","giant","is in the","city center"],'p') --> 0

// charInBagOfWordsCount(["The","tech","giant","is in the","city center"],'e') --> 5