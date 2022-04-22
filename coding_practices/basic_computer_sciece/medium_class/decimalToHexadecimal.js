function decimalToHexadecimal(decNumber){
    // 関数を完成させてください
    hexadecimal =''
    while(decNumber >= 1) {
        number = (decNumber % 16).toString()
        console.log(number)
        switch(number){
            case '10':
                number = 'A'
                break        
            case '11':
                number = 'B'
                break
            case '12':
                number = 'C'
                break        
            case '13':
                number = 'D'
                break
            case '14':
                number = 'E'
                break
            case '15':
                number = 'F'
                break
            case '16':
                number = 'G'
                break
        }
        console.log(number)
        hexadecimal =  number + hexadecimal
        decNumber = Math.floor(decNumber / 16)
    }
    return hexadecimal
}

// 10進数から16進数への書き換え
// medium
// Zayn は 16 進数しか使えない世界は飛ばされてしまったため、自動で 10 進数を 16 進数へ変えるプログラムを作ることにしました。正の 10 進数 decNumber が与えられるので、16 進数に書き換える decimalToHexadecimal という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer decNumber

// 出力のデータ型： string

// decimalToHexadecimal(532454) --> 81FE6

// decimalToHexadecimal(90304) --> 160C0

// decimalToHexadecimal(28394) --> 6EEA

// decimalToHexadecimal(15) --> F

// decimalToHexadecimal(74) --> 4A