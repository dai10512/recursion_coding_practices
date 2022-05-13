function interestsPaid(initialLoan,didPayOnTime){
    // 関数を完成させてください
    interest = (didPayOnTime) ? 0.02 : 0.15
    return 2.5 + initialLoan * (1+interest)
}

// 利子の支払い
// easy
// Terry は Mercedes-Benz で高級車をローンで購入しました。月々のローン initialLoan と期限内にお金を払ったか払っていないかを表すブーリアン値 didPayOnTime が与えられるので、$2.5 の手数料とローンの利子を請求する、interestsPaid という関数を作成してください。期限内にお金が支払われなかった場合、15% の利子となり、支払われた場合は 2% の利子が請求されます。

// 関数の入出力例

// 入力のデータ型： integer initialLoan, bool didPayOnTime

// 出力のデータ型： double-float

// interestsPaid(100,true) --> 104.5

// interestsPaid(830,false) --> 957

// interestsPaid(100,false) --> 117.5

// interestsPaid(225,true) --> 232

// interestsPaid(225,false) --> 261.25