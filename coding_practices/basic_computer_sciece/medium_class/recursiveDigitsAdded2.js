// function recursiveDigitsAdded(digits){
//     current = splitAndAdd(digits,0,String(digits).length-1)
    
//     if(String(current).length == 1){
//         return current
//     } 

//     return current + recursiveDigitsAdded(current)
// }

// function splitAndAdd(digits,left,right){
//     leftNum = String(digits)[left]
//     rightNum = String(digits)[right]

//     if(left == right){
//         return Number(leftNum)
//     }
//     if(left>right){
//         return 0
//     }

//     bothEdgeAdd = Number(leftNum) + Number(rightNum)   
//     return bothEdgeAdd + splitAndAdd(digits, left+1 ,right-1)
// }

function recursiveDigitsAdded(digits){

    totalTotal = 0
    if(digits.toString().length == 1){
        totalTotal += digits
    }
    while(digits.toString().length > 1){
        console.log(digits.toString().length)

        total = getTotal(digits)


        totalTotal += total
        digits = total
    }

    return totalTotal
}


function getTotal(digits){
    digitsStr = digits.toString()
    digitsl = digitsStr.length
    i = 0
    digitsTotal = 0
    
    while(i < digitsl){
        digitsTotal += Number(digitsStr[i])
        i++
    }
    return digitsTotal
}

// 数字の分割
// medium
// 自然数 digits（0 < digits < 1015）が与えられるので、数字を 1 桁ずつ分解して、それぞれの値を合計し、その値が 1 桁になるまで同じ作業を繰り返した時、それぞれの合計値を足し合わせて得られる値を返す、recursiveDigitsAdded という関数を再帰を使って作成してください。例えば、45622943 の場合、1 桁ずつ分解することによって、4 + 5 + 6 + 2 + 2 + 9 + 4 + 3 = 35 となりますが、値が 1 桁ではないので、もう一度 35 = 3 + 5 = 8 のように分解します。最後にそれぞれ足し合わせて 8 + 35 = 43 となります。99999999999884 の場合は、9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 8 + 8 + 4 = 119 となり、その後 1 + 1 + 9 = 11 となるので、119 + 11 + 2 = 132 となります。

// 関数の入出力例

// 入力のデータ型： long digits

// 出力のデータ型： integer

// recursiveDigitsAdded(5) --> 5

// recursiveDigitsAdded(8) --> 8

// recursiveDigitsAdded(12) --> 3

// recursiveDigitsAdded(98) --> 25

// recursiveDigitsAdded(3528) --> 27

// recursiveDigitsAdded(99999999999884) --> 132

// recursiveDigitsAdded(5462) --> 25

// recursiveDigitsAdded(45622943) --> 43

// recursiveDigitsAdded(9514599) --> 48