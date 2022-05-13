function helper(capitalMoney, goalMoney, interest, year) {
  while (capitalMoney < goalMoney) {
    if (year == 80) {
      return 80;
    }
    if (year % 2 == 0) {
      landInterest = 2;
    }
    if (year % 2 != 0) {
      landInterest = 3;
    }
    capitalMoney = capitalMoney * (1 + interest / 100);
    goalMoney = goalMoney * (1 + landInterest / 100);
    year++;
  }
  return year;
}

// function helper(capitalMoney,goalMoney, interest,year){
//     if(capitalMoney >= goalMoney){
//         return year
//     }
//     else if(year == 80){
//         return 80
//     }
//     else if(year % 2 == 0){
//         return helper(capitalMoney*(1+interest/100), goalMoney * 1.02,interest,year+1)
//     }
//     else{
//         return helper(capitalMoney * (1 + interest/100), goalMoney * 1.03,interest,year+1)
//     }
// }

// 投資の計算
// easy
// Kathy は現在価格 goalMoney ドルの土地の購入するために、年利 interest（0 < interest < 100）%の金融商品に capitalMoney ドル投資しようと計画しています。goalMoney, interest, capitalMoney が与えられるので、何年後に土地の購入ができるかを返す、howLongToReachFundGoal という関数を再帰によって作成してください。なお、毎年得られた利益は同商品に再投資するとし、土地の価格は経過する年数が偶数（0 を含む）の時は 2%、奇数の時は 3% 上昇します。また、人の寿命は 80 歳未満と仮定し、80 年以上かかる時は 80 としてください。

// 関数の入出力例

// 入力のデータ型： integer capitalMoney, integer goalMoney, integer interest

// 出力のデータ型： integer

// howLongToReachFundGoal(5421,10421,5) --> 27

// howLongToReachFundGoal(5421,30,30) --> 0

// howLongToReachFundGoal(600,10400,7) --> 67

// howLongToReachFundGoal(32555,5200000,12) --> 58

// howLongToReachFundGoal(50,35000,65) --> 14

// howLongToReachFundGoal(10,350000,2) --> 80

// howLongToReachFundGoal(20000,10050000,30) --> 27
