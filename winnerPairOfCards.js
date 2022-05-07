function winnerPairOfCards(player1,player2){
    // 関数を完成させてください
    let hashMap1 = getHashMap(player1)
    let hashMap2 = getHashMap(player2)
    
    console.log('hashMap1')
    console.log(hashMap1)
    console.log('--------')
    console.log('hashMap2')
    console.log(hashMap2)

    let strongSortedList1 = getStrongSortedList(hashMap1)
    let strongSortedList2 = getStrongSortedList(hashMap2)

    console.log(strongSortedList1)
    console.log(strongSortedList2)

    let result ='draw'

    for(let i = 0 ; i < strongSortedList1.length; i++){
        if(hashMap1[strongSortedList1[i]] > hashMap2[strongSortedList2[i]]){
            result = 'player1'
            break
        }
        else if(hashMap1[strongSortedList1[i]] < hashMap2[strongSortedList2[i]]) {
            result = 'player2'
            break
        }
        else if(hashMap1[strongSortedList1[i]] == hashMap2[strongSortedList2[i]]){
            console.log('1draw')          
            if(Number(strongSortedList1[i]) > Number(strongSortedList2[i])){
                result = 'player1'
                break
            }
            else if(Number(strongSortedList1[i]) < Number(strongSortedList2[i])) {
                result = 'player2'
                break
            }
        }
    }
    return result
}

function getHashMap(player){

    let hashMap = {}

    for(let i =0; i < player.length; i++){
        let intValue = getIntValue(player[i][1])                
        if(hashMap[intValue] === undefined) hashMap[intValue] = 1
        else hashMap[intValue] ++
    }
    return hashMap
}

function getStrongSortedList(hashMap){
    let keys = Object.keys(hashMap)
    let currentMaxCount = hashMap[keys[0]]
    let currentMaxPosition = 0
    let strongSortedList = []

    while(keys.length > 0){
        for(let i = 1 ; i < keys.length; i++){
            if(hashMap[keys[i]] > currentMaxCount) {
                currentMaxCount = hashMap[keys[i]]
                currentMaxPosition = i
            }
            else if(hashMap[keys[i]] == currentMaxCount){
                if(Number(keys[i]) > Number(keys[currentMaxPosition])) {
                    currentMaxCount = hashMap[keys[i]]
                    currentMaxPosition = i
                }
            }
        }
        strongSortedList.push(keys[currentMaxPosition])
        keys.splice(currentMaxPosition,1)
        currentMaxCount = hashMap[keys[0]]
        currentMaxPosition = 0
    }
    return strongSortedList
}

function getIntValue(cardNumber){
    switch(cardNumber){
        case 'A':
            result = '14'
            break

        case '1': //10の場合
            result = '10'
            break
        
        case 'J':
            result = '11'
            break
        
        case 'Q':
            result = '12'
            break

        case 'K':
            result = '13'
            break

        default:
            result = cardNumber
    }
    return result
}

// Pair of Cards
// medium
// Pair of Cards というゲームをプレイしています。このゲームは以下のルールになっています。

// - 同じランク（※カードの強さ）のカードの枚数が多いプレイヤーが勝利する（2 が 3 枚 > 10 が 2 枚）

// - 上記枚数が同じ場合は、そのカードのランクによって勝敗が決まる（2 が 2 枚 < 10 が 2 枚）

// - 上記も同じ場合は、次に枚数の多いカードを同様に比べ、勝敗が決まるまですべてのカードを比べる

// - 最終的に勝敗が決まらない場合は draw とする

// - カードの強さ : 2 < 3 < 4 < 5 < 6 … J < Q < K < A

// プレイヤー1、2 の手札を表す配列 player1、player2 が与えられるので、勝利プレイヤー文字列で返す、winnerPairOfCards という関数を作成してください。

// 例1 : プレイヤー1 が ["♣4","♥8","♥8","♠8","♣J"] で、プレイヤー2 が ["♣4","♥J","♥J","♠Q","♣3"] の場合、プレイヤー1 は 8 を 3 枚持ち、プレイヤー2 は J を 2 枚持っているので、プレイヤー1 が勝利します。

// 例2 : プレイヤー1 が ["♣4","♥8","♥8","♠4","♣J"] で、プレイヤー2 が ["♣4","♥J","♥J","♠Q","♣3"] の場合、プレイヤー1 は 4 を 2 枚、8 を 2 枚持ち、プレイヤー2 は J を 2 枚持つので、両者のランクの数は同じです。一方、両者のカードを比較してみると、プレイヤー2 のカード（J）の方がプレイヤー1（8）よりも強いので、プレイヤー2 の勝利となります。

// 例3 : プレイヤー1 が ["♣4","♥7","♥7","♠Q","♣J"] で、プレイヤー2 が ["♥7","♥7","♣K","♠Q","♦2"] の場合、プレイヤー1 は 7 を 2 枚持ち、プレイヤー2 も 7 を 2 枚持つので、両者のランクの数もカードの強さも同じです。次に 1 枚のカードを見ると、プレイヤー2 のカード K の方がプレイヤー1 のカード Qよりも強いので、プレイヤー2 の勝利となります。

// 関数の入出力例

// 入力のデータ型： string[] player1, string[] player2

// 出力のデータ型： string

// winnerPairOfCards(["♣4","♥7","♥7","♠Q","♣J"],["♥10","♥6","♣K","♠Q","♦2"]) --> player1

// winnerPairOfCards(["♣4","♥7","♥7","♠Q","♣J"],["♥7","♥7","♣K","♠Q","♦2"]) --> player2

// winnerPairOfCards(["♣A","♥2","♥3","♠4","♣5"],["♥A","♥2","♣3","♠4","♦5"]) --> draw

// winnerPairOfCards(["♣A","♥A","♥A","♠4","♣5"],["♥A","♥A","♣A","♠4","♦5"]) --> draw

// winnerPairOfCards(["♣9","♥8","♥7","♠4","♣5"],["♥10","♥8","♣7","♠4","♦5"]) --> player2

// winnerPairOfCards(["♣A","♥A","♥2","♠3","♣4"],["♥6","♥6","♣Q","♠Q","♦8"]) --> player1

// winnerPairOfCards(["♣A","♥A","♥A","♠3","♣4"],["♥6","♥6","♣Q","♠Q","♦Q"]) --> player1

// winnerPairOfCards(["♣K","♥K","♥K","♠A","♣A"],["♥6","♥6","♣Q","♠Q","♦Q"]) --> player1

// winnerPairOfCards(["♣6","♠3","♠J","♦2","♥3"],["♠8","♥2","♦8","♥9","♦J"]) --> player2

// winnerPairOfCards(["♥3","♠9","♦3","♣Q","♦A"],["♥4","♥3","♠10","♦3","♥4"]) --> player2

// winnerPairOfCards(["♥3","♠9","♦3","♣Q","♦3"],["♥4","♥A","♠10","♦A","♥4"]) --> player1

// winnerPairOfCards(["♣K","♥8","♥K","♠K","♣A"],["♥K","♥4","♣K","♠4","♦K"]) --> player2

// winnerPairOfCards(["♥9","♠8","♦7","♣6","♦5"],["♥9","♥8","♠7","♦6","♥4"]) --> player1

// winnerPairOfCards(["♥3","♠4","♦5","♣6","♦7"],["♥2","♥3","♠5","♦6","♥7"]) --> player1

// winnerPairOfCards(["♥K","♠4","♦K","♣6","♦6"],["♥6","♥K","♠K","♦6","♥7"]) --> player2

// winnerPairOfCards(["♥2","♠2","♦2","♣2","♦6"],["♥2","♥2","♠2","♦2","♥7"]) --> player2

// winnerPairOfCards(["♥2","♠2","♦2","♣2","♦6","♠3","♦3","♣4","♦6"],["♥2","♥2","♠2","♦3","♥7","♠2","♦3","♣6","♦6"]) --> player2

// winnerPairOfCards(["♥2","♠2","♦2","♣2","♦6","♠3","♦3","♣4","♦3"],["♥2","♥2","♠2","♦3","♥7","♠2","♦3","♣6","♦6"]) --> player1

// winnerPairOfCards(["♥2","♠2","♦6"],["♥2","♥2","♥3"]) --> player1

// winnerPairOfCards(["♥2","♠A","♦6"],["♥2","♥2","♥3"]) --> player2