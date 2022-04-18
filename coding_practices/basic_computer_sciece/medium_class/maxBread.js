function maxBread(money,price,sticker){
    // 関数を完成させてください
    
    buyCount = Math.floor(money / price)
    serviceCount = Math.floor(buyCount / sticker)
    ownSticker = serviceCount + (buyCount % sticker)
    console.log(ownSticker)

    totalServiceCount = serviceCount

    while(ownSticker / sticker >= 1){
        newServiceCount = Math.floor(ownSticker / sticker)
        ownSticker = newServiceCount + (ownSticker % sticker)
        totalServiceCount += newServiceCount

    }
    totalCount = buyCount + totalServiceCount
    return totalCount
}

// 購入できる最大のパンの個数
// easy
// 今所持金 money 円が財布の中に price 円のパンを買う計画をしています。パンの包装にはシールがついており、このパン屋ではそれを sticker 枚集めることで、1 つのパンと交換することができます。自然数 money、price、sticker が与えられるので、購入できるパンの最大数を返す、maxBread という関数を再帰を使って作成してください。ただし、sticker >= 2 とします。

// 例えば、money = 10、price = 2、sticker = 3 の時を考えてみましょう。最初にパンを 5 個購入し、それによってシールを 5 枚取得します。その後、その中からシール 3 個を使ってパン 1 個を購入し、それによってシール 1 枚を取得します。最後に手持ちのシール 3 枚をパンと交換できるので、合計 7 個のパンを手に入れることができます。

// 関数の入出力例

// 入力のデータ型： integer money, integer price, integer sticker

// 出力のデータ型： integer

// maxBread(10,2,3) --> 7

// maxBread(15,1,3) --> 22

// maxBread(20,2,10) --> 11

// maxBread(50,3,2) --> 31

// maxBread(100,4,5) --> 31

// maxBread(5,1,2) --> 9