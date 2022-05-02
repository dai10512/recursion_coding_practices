function countAllChars(arr){
    // 関数を完成させてください
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        count += arr[i].length
    }

    return count
}

// 配列内の文字のカウント
// very easy
// 文字列によって構成される配列 arr が与えられるので、配列内に存在する全ての文字数をカウントする、countAllChars という関数を作成

// 関数の入出力例

// 入力のデータ型： string[] arr

// 出力のデータ型： integer

// countAllChars(["The wood","Pecked peckers","At the inn","Tomorrowland"]) --> 44

// countAllChars(["He","fumbled","in","the,darkness","looking","for","the","light","switch"]) --> 47

// countAllChars(["I","am","never","at","home","on","Sundays"]) --> 23