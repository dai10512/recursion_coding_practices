function isMountain(height){
    // 関数を完成させてください
    let maxHeight = 0
    let maxPosition = 0
    for(let i = 0;i < height.length; i++){
        if(height[i] > maxHeight){
            maxHeight = height[i]
            maxPosition = i
        }
    }
    let leftHeightArray = height.slice(0,maxPosition+1)
    let rightHeightArray = height.slice(maxPosition, height.length)

    return isIncHeight(leftHeightArray) && isDecHeight(rightHeightArray) && height.length >= 3
}

function isIncHeight(array){
    let currentHeight = array[0]
    let result = true
    
    if(array.length <= 1){
        result = false
    }

    for(let i = 1; i < array.length; i ++){
        if(array[i] <= currentHeight){
            result = false
            break
        }
        currentHeight = array[i]
    }
    return result
}


function isDecHeight(array){
    let currentHeight = array[0]
    let result = true
    
    if(array.length <= 1){
        result = false
    }
    
    for(let i = 1; i < array.length; i ++){
        if(array[i] >= currentHeight){
            result = false
            break
        }
        currentHeight = array[i]
    }
    
    return result
}


// 山型
// medium
// Bond はクラスの文化祭で行う劇で背景を制作することになり、現在は山を作っています。各地点での山の高さの一覧 height が与えられるので、山型になっているかどうか判断する isMountain という関数を定義してください。山型の条件は以下の通りです。

// - 配列のサイズが 3 以上であること。

// 　
// - 高さは初めは上がり続け、一度下がったら下がり続けること。（例：1,2,3,4,5,3,2,1）


// 関数の入出力例

// 入力のデータ型： integer[] height

// 出力のデータ型： bool

// isMountain([1,2,3,2]) --> true

// isMountain([1,2]) --> false

// isMountain([2,1]) --> false

// isMountain([1,2,2,2,2]) --> false

// isMountain([1,2,3]) --> false

// isMountain([4,3,2,1]) --> false

// isMountain([1,2,2,2,3,2]) --> false

// isMountain([3,2,2,2,1,1]) --> false

// isMountain([10,20,30,400,500,10]) --> true

// isMountain([100,200,100,400,500,100]) --> false

// isMountain([100,200,300,200,100,300]) --> false

// isMountain([100,50,100,200,300,400]) --> false

// isMountain([53,158,477,994,994,867,797,755,744,621,616]) --> false