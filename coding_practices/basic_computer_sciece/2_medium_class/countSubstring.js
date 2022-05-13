function countSubstring(bits){
    // 関数を完成させてください
    count = 0
    for(let i = 0; i < bits.length; i++ ){
        if(bits[i]==1){
            x = i + 1
            for(x ; x <= bits.length; x++ ){
               if(bits[x]== 1){
                   count ++
               }
            }
        }    
    }
    return count
}



// 1で始まり1で終わる
// easy
// Joey は表計算アプリを作成しており、1 と 1 で囲まれた数字を抽出しようと考えています。0 と 1 のみで構成される文字列 bits が与えられるので、1 で始まり 1 で終わる部分文字列の組み合わせを返す、countSubstring という関数を作成してください。すべての 1 と 0 は区別し、さらに同じ場所から始まり、同じ場所で終わる組み合わせはなしとします。

// 例えば、1111 は 6 を返します。それは [11, 11, 11, 111, 111, 1111] の組み合わせが存在するからです。また、01101 は [11, 101, 1101] の組み合わせが該当するため、3 を返します。

// 関数の入出力例

// 入力のデータ型： string bits

// 出力のデータ型： integer

// countSubstring("1111") --> 6

// countSubstring("01101") --> 3

// countSubstring("0010") --> 0

// countSubstring("00101") --> 1

// countSubstring("10101111") --> 15

// countSubstring("11111") --> 10

// countSubstring("111111") --> 15

// countSubstring("011011001") --> 10