function decimalToBinary(decNumber) {
  message = "";
  while (decNumber / 2 >= 1) {
    message = (decNumber % 2).toString() + message;
    decNumber = Math.floor(decNumber / 2);
  }
  message = (decNumber % 2).toString() + message;
  return message;
}

// 10進数から2進数への書き換え
// easy
// Zayn は 2 進数しか使えない世界は飛ばされてしまったため、自動で 10 進数を 2 進数へ変えるプログラムを作ることにしました。正の 10 進数 decNumber が与えられるので、2 進数に書き換える decimalToBinary という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer decNumber

// 出力のデータ型： string

// decimalToBinary(60) --> 111100

// decimalToBinary(26) --> 11010

// decimalToBinary(35) --> 100011

// decimalToBinary(100) --> 1100100

// decimalToBinary(505) --> 111111001
