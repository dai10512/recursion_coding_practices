// function summationOfSummation(n){
//     if(n <= 0){
//       return 0
//     }
//     return summation(n) + summationOfSummation(n-1)
// }

// function summation(n){
//     if(n <= 0){
//       return 0
//     }
//     return n + summation(n - 1)
// }

function summationOfSummation(n) {
  totalCount = 0;
  for (let i = 0; i <= n; i++) {
    totalCount += summation(i);
  }
  return totalCount;
}

function summation(i) {
  count = 0;
  for (let x = 0; x <= i; x++) {
    count += x;
  }
  return count;
}

// 総和の総和
// easy
// 自然数 n が与えられるので、1 から n までの総和の総和を返す、summationOfSummation という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer n

// 出力のデータ型： integer

// summationOfSummation(1) --> 1

// summationOfSummation(2) --> 4

// summationOfSummation(3) --> 10

// summationOfSummation(4) --> 20

// summationOfSummation(10) --> 220
