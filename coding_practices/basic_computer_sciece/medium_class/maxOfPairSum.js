function maxOfPairSum(arr1,arr2,x){
    // 関数を完成させてください
    let newList = []

    for(let i = 0;i < arr1.length; i++){
        for(let j = 0;j < arr2.length; j++){
            newList.push(arr1[i] + arr2[j])
        }
    }    

    let currentMin = newList[0]
    for(let i = 0;i < newList.length; i++){
        if(newList[i] < currentMin){
            currentMin = newList[i]
        }
    }

    let tentativeMax = currentMin 
    for(let i = 0;i < newList.length; i++){
        if(newList[i] > tentativeMax && newList[i] < x ){
            tentativeMax = newList[i]
        }
    }
    if(tentativeMax >= x){
        return 'no pair'
    }
    else{
        return tentativeMax
    }
}

// x未満の最大値
// easy
// 整数 x と整数によって構成される配列 arr1 と arr2 が与えられるので、2 つの配列からそれぞれ 1 個ずつ整数を選んで足した合計値として、x 未満の範囲内での最大値を文字列として返す maxOfPairSum という関数を作成してください。そのような値がない場合は、no pair と返してください。

// 関数の入出力例

// 入力のデータ型： integer[] arr1, integer[] arr2, integer x

// 出力のデータ型： string

// maxOfPairSum([2,8,7],[1,5,6],10) --> 9

// maxOfPairSum([12,8,20],[11,9,22],30) --> 29

// maxOfPairSum([-4,-2,-5],[-1,-6,-8],-3) --> -5

// maxOfPairSum([583,114,925,669,402,7,84,747],[655,797,905,843,652,841,893],260) --> no pair