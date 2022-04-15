function screenViewMode(height,width){
    // 関数を完成させてください
    return (height >= width) ? 'portrait' : 'landscape' 
}


// ポートレートモード
// very easy
// 高さ height と幅 width が与えられるので、デバイスの向きを返す、screenViewMode という関数を定義してください。もし、高さが幅以上の場合、portrait を返し、それ以外の場合では landscape を返します。


// 関数の入出力例

// 入力のデータ型： integer height, integer width

// 出力のデータ型： string

// screenViewMode(200,150) --> portrait

// screenViewMode(120,100) --> portrait

// screenViewMode(50,100) --> landscape

