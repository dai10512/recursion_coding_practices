function shuffleSuccessRate(arr,shuffledArr){
    // 関数を完成させてください
    let count = 0
    for(let i =0;i < arr.length; i++){
        if(arr[i] == shuffledArr[i]){
            count++
        }
    }
    result = Math.floor((1 - (count / arr.length)) * 100)
    return result
}



// シャッフルの割合
// easy
// Beck は倉庫の整理係で、倉庫内にある荷物には全て商品番号が振られています。ある日、地震が起きて棚にある荷物が全て落ちてしまい、Beck は急いで棚に戻したら荷物の順番がバラバラになりました。地震前の荷物 arr と地震後の荷物 shuffledArr が与えられるので、地震が起きた後に何%の荷物が移動したかを返す、shuffleSuccessRate という関数を定義してください。小数点以下に対しては切り捨ての処理を行ってください。また商品番号は一意であるとします。

// 関数の入出力例

// 入力のデータ型： integer[] arr, integer[] shuffledArr

// 出力のデータ型： integer

// shuffleSuccessRate([2,32,45],[45,32,2]) --> 66

// shuffleSuccessRate([2,32,45],[45,2,32]) --> 100

// shuffleSuccessRate([2,32,45],[2,32,45]) --> 0

// shuffleSuccessRate([2,32,45,67],[2,32,67,45]) --> 50

// shuffleSuccessRate([2,32,45,67,89],[2,89,67,45,32]) --> 80

// shuffleSuccessRate([119,726,398,187,943,486,728,305,968,754,650,536,969,305,111,225,708,806,40,969],[708,969,111,398,754,726,536,943,486,305,969,40,650,806,187,225,968,119,728,305]) --> 95