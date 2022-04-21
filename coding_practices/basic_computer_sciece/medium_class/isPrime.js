function isPrime(number) {
  // 関数を完成させてください
  answer = true;
  if (number == 1) {
    answer = false;
  } else {
    i = 2;
    while (i < number) {
      if (number % i == 0) {
        answer = false;
        break;
      }
      i++;
    }
  }
  return answer;
}

// 素数
// easy
// Kate は音楽の野外フェスを行うことになり、入場者の中から抽選でプレゼントを渡す企画を立てています。そこで、素数の値で入場した方を当選者とすることにしました。入場者番号 number が与えられるので、素数かどうか判定する isPrime という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer number

// 出力のデータ型： bool

// isPrime(1) --> false

// isPrime(2) --> true

// isPrime(3) --> true

// isPrime(4) --> false

// isPrime(25) --> false

// isPrime(29) --> true

// isPrime(36) --> false

// isPrime(45) --> false

// isPrime(85) --> false

// isPrime(455) --> false
