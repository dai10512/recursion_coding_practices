function fizzBuzz(n) {
  // 関数を完成させてください
  message = "1";
  for (let i = 2; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      message += "-FizzBuzz";
    } else if (i % 3 == 0) {
      message += "-Fizz";
    } else if (i % 5 == 0) {
      message += "-Buzz";
    } else {
      message += `-${i}`;
    }
  }
  return message;
}

// Francis はイギリスで小学生に楽しく割り算を教えるために FizzBuzz ゲームを作りました。このゲームでは以下の制約があります。

// - 3 の倍数のときに Fizz と声を出す

//
// - 5 の倍数のときに Buzz と声に出す

//
// - 3 と 5 両方で割り切れる場合は FizzBuzz と声に出す

// 自然数 n が与えられるので、1 から n まで全ての数字および、Fizz、Buzz、FizzBuzz を返す、FizzBuzz という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer n

// 出力のデータ型： string

// fizzBuzz(7) --> 1-2-Fizz-4-Buzz-Fizz-7

// fizzBuzz(16) --> 1-2-Fizz-4-Buzz-Fizz-7-8-Fizz-Buzz-11-Fizz-13-14-FizzBuzz-16

// fizzBuzz(30) --> 1-2-Fizz-4-Buzz-Fizz-7-8-Fizz-Buzz-11-Fizz-13-14-FizzBuzz-16-17-Fizz-19-Buzz-Fizz-22-23-Fizz-Buzz-26-Fizz-28-29-FizzBuzz
