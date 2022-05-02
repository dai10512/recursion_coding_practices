class Book{
    constructor(title,year){
        this.title = title
        this.year = year
        this.author = 'Stephen Hawkings'
    }
}

function printBookArray(books){
    for(let i =0; i < books.length; i++){
        console.log(books[i].title + ' written by ' + books[i].author + ' in ' + books[i].year)
    }
}

books = []
books.push(new Book("How Did It All Begin?", "2021"))
books.push(new Book("The Theory of Everything", "2010"))
books.push(new Book("God Created the Integers", "2006"))

printBookArray(books)

// Bookクラス
// easy
// 問題 469 で Card オブジェクトを格納した配列の各要素を出力しました。それでは同じように、以下に従って Book クラスを作成し、Book オブジェクトを配列に格納して、配列内の各オブジェクトのクラス変数及びインスタンス変数を出力する printBookArray という関数を作成し、テストケースを出力してください。

// String author	Stephen Hawkings という著者の名前をクラス変数として作成してください。
// String title	本のタイトル
// String year	本が公開された年
// テストケース

// books = []

// books.push(new Book("How Did It All Begin?", "2021"))

// books.push(new Book("The Theory of Everything", "2010"))

// books.push(new Book("God Created the Integers", "2006"))


// printBookArray(books)

// --> How Did It All Begin? written by Stephen Hawkings in 2021

// --> The Theory of Everything written by Stephen Hawkings in 2010

// --> God Created the Integers written by Stephen Hawkings in 2006