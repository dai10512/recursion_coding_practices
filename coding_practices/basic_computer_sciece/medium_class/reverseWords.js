function reverseWords(sentence){
    // 関数を完成させてください

    l = sentence.length
    message = ''
    word = ''

    for(let i = 0; i <= l; i++){
        if(sentence[i] == ' ' || i == l) {
            message = message + ' ' + word
            word = ''
        }
        else{
            word = sentence[i] + word
        }
    }
    finalMessage = message.substring(1,message.length)
    return finalMessage
}

// 単語の逆表示
// easy
// Amuedo は全ての単語のスペルが反対になる世界に来てしまいました。この世界で文章を読むためには、あらゆる単語のスペルを反対にしなければいけません。文章 sentence が与えられるので、各単語のみを逆向きに表示する、reverseWords という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： string sentence

// 出力のデータ型： string

// reverseWords("olleh dlrow") --> hello world

// reverseWords("hello world") --> olleh dlrow

// reverseWords("Please wait outside of the house") --> esaelP tiaw edistuo fo eht esuoh

// reverseWords("He started to believe in ghosts") --> eH detrats ot eveileb ni stsohg

// reverseWords("Red is greener than purple") --> deR si reneerg naht elprup