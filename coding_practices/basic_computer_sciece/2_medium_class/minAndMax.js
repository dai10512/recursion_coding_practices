function minAndMax(intArr){
    // 関数を完成させてください
    let total = 0

    for(let i = 0; i < intArr.length; i ++){
        total += intArr[i]
    }

    let max = intArr[0];
    let min = intArr[0];
    let minTotal = 0;
    let maxTotal = 0;
    let minAndMaxList =[]

    for(let i = 1; i < intArr.length; i++){
        if(intArr[i] > max){
            max = intArr[i]
            } 
        if(intArr[i] < min){
            min = intArr[i]
        } 
    }
    minTotal = total - max
    maxTotal = total - min
    minAndMaxList.push(minTotal)
    minAndMaxList.push(maxTotal)
    return minAndMaxList
}



// バーゲンセール
// very easy
// Fingal はあるアパレルショップに訪れました。そこでは、服を複数購入した場合、1 点だけ無料にするセールを行なっていました。購入する服の値段がまとめてある intArr が与えられるので、1 点無料になった際の合計の金額を返す、minAndMax という関数を作成してください。無料になる服が購入するものの中で最も高いものの場合と、安いものの場合の 2 つを返してください。

// 関数の入出力例

// 入力のデータ型： integer[] intArr

// 出力のデータ型： integer[]

// minAndMax([5,3,2,3,4]) --> [12,15]

// minAndMax([5,3]) --> [3,5]

// minAndMax([5,0,1]) --> [1,6]

// minAndMax([5,5,5,5,5]) --> [20,20]

// minAndMax([10,80,40,60,70]) --> [180,250]

// minAndMax([700,500,300,900,600,80,320,780,1000]) --> [4180,5100]