class Card{
    constructor(suit,value,intValue){
        this.suit = suit
        this.value = value
        this.intValue = intValue
    }
}

function printCardArray(cards){
    for(let i = 0; i < cards.length; i++){
        // console.log(cards[i].suit + cards[i].value + cards[i].intValue)
        console.log(cards[i].suit  + cards[i].value  +  '(' + cards[i].intValue + ')')
    }
}

cards = [];
cards.push(new Card("♣", "A", "1"))
cards.push(new Card("♦", "K", "13"));
cards.push(new Card("♥", "Q", "12"))
cards.push(new Card("♠", "J", "11"))

printCardArray(cards)

// Cardクラス
// easy
// 配列の要素には、文字列や数値だけではなく、オブジェクトも格納することができます。以下に従って、Card クラスを作成し、Card オブジェクトを配列に格納して、配列内の各オブジェクトのインスタンス変数を出力する printCardArray という関数を作成し、テストケースを出力してください。

// String suit	カードの記号（♣, ♦, ♥, ♠）を表します。
// String value	カードの値（A,2, ... ,K）
// int intValue	カードの数値（1 ~ 13）
// テストケース

// cards = [];

// cards.push(new Card("♣", "A", "1"))

// cards.push(new Card("♦", "K", "13"));

// cards.push(new Card("♥", "Q", "12"))

// cards.push(new Card("♠", "J", "11"))


// printCardArray(cards)

// --> ♣A(1)

// --> ♦K(13)

// --> ♥Q(12)

// --> ♠J(11)