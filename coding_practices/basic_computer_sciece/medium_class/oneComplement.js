function oneComplement(bits){
    // 関数を完成させてください
    message = ''
    for(let i=0; i<=bits.length; i++){
        switch(bits[i]){
            case '1':
              message += '0';
              break;
            case '0':
              message += '1'
              break;
            default:
              message = 'error occured'
              return message
        }
    }
    return message
}


// 1の補数
// easy
// Chan は宿題で、2 進数で 1 の補数を求めるプログラム作成を課されました。2 進数 bits が与えられるので 1 の補数を返す、oneComplement という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： string bits

// 出力のデータ型： string

// oneComplement("00011100") --> 11100011

// oneComplement("10010") --> 01101

// oneComplement("001001") --> 110110

// oneComplement("0111010") --> 1000101

// oneComplement("1") --> 0