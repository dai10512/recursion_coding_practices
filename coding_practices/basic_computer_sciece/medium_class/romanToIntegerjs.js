function romanToInteger(romanNumber){
    // 関数を完成させてください
    let romanToIntegerMap = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
    }
    let count = 0

    for(let i =0; i < romanNumber.length ; i ++){
        if(romanToIntegerMap[romanNumber[i]] < romanToIntegerMap[romanNumber[i+1]]){
            count += romanToIntegerMap[romanNumber[i]] * -1
        }
        else{
            count += romanToIntegerMap[romanNumber[i]] * 1
        }
    }
    return count
}// ローマ数字を数字に変換
// medium
// Spinozza はローマ数字を自動で普通の数字に変換するシステムを開発しています。ローマ数字 romanNumber が与えられるので、それを自然数へと変換する、romanToInteger という関数を定義してください。ローマ数字への表は以下の通りです。

// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000
// 関数の入出力例

// 入力のデータ型： string romanNumber

// 出力のデータ型： integer

// romanToInteger("IV") --> 4

// romanToInteger("IX") --> 9

// romanToInteger("XXXVIII") --> 38

// romanToInteger("LIV") --> 54

// romanToInteger("LXXXIX") --> 89

// romanToInteger("XCVIII") --> 98

// romanToInteger("MCMXCIII") --> 1993

// romanToInteger("MMXV") --> 2015

// romanToInteger("MMXX") --> 2020