function isMarcusLarger(stringOperand1,stringOperand2){
    // 関数を完成させてください
    let lCStrOperand1 = stringOperand1.toLowerCase()
    let lCStrOperand2 = stringOperand2.toLowerCase()
    let decimal1Count = 0
    let decimal2Count = 0

    for(let i = 0; i < lCStrOperand1.length; i ++){
        decimal1Count += lCStrOperand1[i].charCodeAt()
    }
    for(let i = 0; i < lCStrOperand2.length; i ++){
        decimal2Count += lCStrOperand2[i].charCodeAt()
    }
    return decimal1Count > decimal2Count
}



// 文字コード
// easy
// Marcus は細い一本道を歩いていたら、1 人の老人に道を塞がれてしまいました。老人は「英単語を一つ出してください。私が出す英単語より文字の値が大きければ通してあげます」と話しました。文字の値は以下で定義されています。

// - 文字の値とは単語に含まれるそれぞれの文字を文字コードによって 10 進数へと変換し、足し合わせたもの（例："abc" は文字コードによって a = 97、b = 98、c = 99 へと変換され、全部足し合わせて 294 と計算されます）

// 　
// - 大文字と小文字の区別はしない（例：'A' == 'a' == 97となる）

// Marcus の英単語 stringOperand1 と老人の英単語 stringOperand2 が与えられるので、Marcus の方が大きければ true、等しいときと老人の方が大きいときは false を返す、isMarcusLarger という関数を定義してください。

// 関数の入出力例

// 入力のデータ型： string stringOperand1, string stringOperand2

// 出力のデータ型： bool

// isMarcusLarger("Fantastic","Bridge") --> true

// isMarcusLarger("Bridge","Fantastic") --> false

// isMarcusLarger("hello","HelLo") --> false

// isMarcusLarger("Appearances may deceive","I think so too") --> true

// isMarcusLarger("pool","pooling") --> false

// isMarcusLarger("magni","est") --> true