function fireEmployees(employees,unemployed){
    // 関数を完成させてください
    let cache = []
    for(i = 0; i < employees.length; i++){
        isUnemployed = false
        for(j = 0; j < unemployed.length; j++){
            if(employees[i] == unemployed[j]){
                isUnemployed = true 
                break
            } 
        }
        if(isUnemployed != true){
            cache.push(employees[i])
        }
    }
    return cache
}



// 従業員リスト
// easy
// Cole はある企業の人事として働いており、従業員のリストを整理しています。従業員のリスト employees と来月解雇されるリスト unemployed が与えられるので、来月残留する従業員の配列を返す fireEmployees という関数を定義してください。

// 関数の入出力例

// 入力のデータ型： string[] employees, string[] unemployed

// 出力のデータ型： string[]

// fireEmployees(["Steve","David","Mike","Donald","Lake","Julian"],["Donald","Lake"]) --> [Steve,David,Mike,Julian]

// fireEmployees(["Donald","Lake"],["Donald","Lake"]) --> []

// fireEmployees(["Steve","David","Mike","Donald","Lake","Julian"],[]) --> [Steve,David,Mike,Donald,Lake,Julian]

// fireEmployees(["Mike","Steve","David","Mike","Donald","Lake","Julian"],["Mike"]) --> [Steve,David,Donald,Lake,Julian]

// fireEmployees(["Kailey","Kailey"],["Kailey"]) --> []