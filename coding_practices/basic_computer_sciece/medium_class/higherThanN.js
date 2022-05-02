function higherThanN(arr){
    // 関数を完成させてください
    count = 0
    for(let i =0; i < arr.length; i++){
        for(let j =0; j < arr[i].length; j++){
            console.log(arr[i][j])
            switch(arr[i][j]){
                case 'n':
                case 'o':
                case 'p':
                case 'q':
                case 'r':
                case 's':
                case 't':
                case 'u':
                case 'v':
                case 'w':
                case 'x':
                case 'y':
                case 'z':
                    count ++
                    console.log('count!')
                    console.log([i][j])
                    break
                default:
                    break
            }
        }
    }
    return count
}


// n以降のカウント
// very easy
// 小文字によって構成される配列 arr が与えられるので、n 以降の文字（o,p,q,r など）をカウントする、higherThanN という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： string[] arr

// 出力のデータ型： integer

// higherThanN(["the wood","pecked peckers","at the inn","tomorrowland"]) --> 20

// higherThanN(["he","fumbled","in","the","darkness","looking","for","the","light","switch"]) --> 17

// higherThanN(["he","is","never","at","home","on","weekends"]) --> 11