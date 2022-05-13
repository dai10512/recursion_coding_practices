function hoursToEmpty(velocity,fuelEconomy,tankCapacity){
    // 関数を完成させてください

    fuelPerHour = velocity / fuelEconomy * 3600
    console.log(fuelPerHour)
    return Math.floor(tankCapacity / fuelPerHour * 10)/10
}



// 空のガソリン
// easy
// Leoは車の買い替えを検討していて、いくつか気になる車種のスペックを比較しています。Leoはガソリンスタンドが嫌いなので、ガソリンが空になるまでの時間が長い車を探しています。特定の速さ[マイル/秒]、燃費[マイル/ガロン]、ガスタンク容量[ガロン]が与えられるので、その車のガソリンが空になるまで何時間かかるか計算するhoursToEmptyという関数を定義してください。ただし、出力は小数第 2 位以降を切り取ってください。

// 関数の入出力例

// 入力のデータ型： double-float velocity, integer fuelEconomy, integer tankCapacity

// 出力のデータ型： double-float

// hoursToEmpty(0.04,98,12) --> 8.1

// hoursToEmpty(0.057,36,12) --> 2.1

// hoursToEmpty(0.059,11,18) --> 0.9

// hoursToEmpty(0.08,55,14) --> 2.6