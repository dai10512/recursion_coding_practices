function twosComplement(bits){

    message1 = getOneComplement(bits)
    endNumber = message1[message1.length-1]
    message2 = ''
    isMoveUp = false
    switch(endNumber){
        case '0':
            message2 += '1'
            for(i=message1.length-2; i >= 0 ; i--){
                message2 = message1[i] + message2
            }
            break
        case '1':
            isMoveUp = true
            for(i = message1.length-1; i >= 0 ; i--){
                if(isMoveUp == false){
                    message2 = message1[i] + message2
                }
                else if(isMoveUp == true){
                    if(message1[i]==0){
                        message2 = '1' + message2
                        isMoveUp =false
                    }
                    else if(message1[i]==1){
                        message2 = '0' + message2
                        isMoveUp = true
                    }
                }
            }
            break
    }
    if(message2 == '00000000'){
        message2 = '1' + message2
    }

    return message2
}

function getOneComplement(bits){
    message1 = ''
    for(i=0;i<bits.length;i++){
        switch(bits[i]){
            case '0':
                message1 += '1'
                break

            case '1':
                message1 += '0'
                break
        }
    }
    console.log('1の補数')
    console.log(message1)
    return message1
}

// 2の補数
// medium
// Chan は宿題で、2 進数で 2 の補数を求めるプログラム作成を課されました。2 進数 bits が与えられるので 2 の補数を返す、twosComplement という関数を作成してください。ただし入力の 2 進数は 8 ビットとします。通常、回路はオーバーフローしたビットを保持することはできないですが、今回は 00000000 の 2 の補数の最上位ビットを出力に含めてください。


// （中上級者向け）

// 整数型において、2 の補数表現を用いると加算で整数の減算が可能になり、正負の符号に 1 ビット扱う方法よりもハードウェアの構成が簡単になるため広く扱われています。

// 関数の入出力例

// 入力のデータ型： string bits

// 出力のデータ型： string

// twosComplement("00000000") --> 100000000

// twosComplement("00000010") --> 11111110

// twosComplement("11111111") --> 00000001

// twosComplement("01110101") --> 10001011

// twosComplement("00000001") --> 11111111

// twosComplement("10000000") --> 10000000

// twosComplement("10101010") --> 01010110

// twosComplement("11111110") --> 00000010