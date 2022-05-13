function fruitImgUrl(fruit){
    // 関数を完成させてください
    fruit = fruit.toLowerCase()

    let result = ''
    switch(fruit){
        case 'banana':
            result = 'url1'
            break

        case 'pineapple':
            result = 'url2'
            break

        case 'pear':
            result = 'url3'
            break

        default:
            result = 'no image'
    }
    return result
}

// ; フルーツの画像
// ; very easy
// ; Lorber は画像検索サイトを作成しており、ユーザーの入力した文字と同じフルーツを返す処理を実装しようとしました。入力された文字 fruit が与えられるので、banana の時に url1、pineapple の時に url2、pear の時に url3、それ以外は no image と返す、fruitImgUrl という関数を作成してください。

// ; 関数の入出力例

// ; 入力のデータ型： string fruit

// ; 出力のデータ型： string

// ; fruitImgUrl("banana") --> url1

// ; fruitImgUrl("BANANA") --> url1

// ; fruitImgUrl("pineapple") --> url2

// ; fruitImgUrl("pear") --> url3

// ; fruitImgUrl("orange") --> no image

// ; fruitImgUrl("apple") --> no image

// ; fruitImgUrl("Apple") --> no image