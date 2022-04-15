function fallingDistance(planet,time){
    // 関数を完成させてください
    switch(planet){
        case('Earth'):
           g = 9.8
           break
        case('Jupiter'):
           g = 24.79
           break
        case('Mercury'):
           g = 3.7
           break
        default:
           g = 0
    }
    heightMeter = 1/2  * g * Math.pow(time,2)
    heightMile = Math.floor(heightMeter * 0.000621371)
    return heightMile
}

// 重力加速度 g[m/s2] で、高さ h[m] から物体をそっと落下させ、地上に到達するまで t 秒を要するとき、h = 1/2 gt2 が成り立つとします。惑星 planet、落下時間 time[s] が与えられるので、落下距離[mile]を返す、fallingDistance という関数を作成してください。各惑星の重力加速度は以下の表を参考にしてください。

// 惑星名	重力加速度[m/s2]
// Earth（地球）	9.8
// Jupiter（木星）	24.79
// Mercury（水星）	3.7
// その他	0
// メートルからマイルへの変換は、1[m] = 0.000621371[mile] を使用してください。また、求めた落下距離[mile]の小数点以下は切り捨ててください。

// 関数の入出力例

// 入力のデータ型： string planet, integer time

// 出力のデータ型： integer

// fallingDistance("Earth",5000) --> 76117

// fallingDistance("Jupiter",1000) --> 7701

// fallingDistance("Mercury",4500) --> 23278

// fallingDistance("Pluto",2000) --> 0

