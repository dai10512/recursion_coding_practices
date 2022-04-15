function recursiveDigitsAdded(digits) {
  current = splitAndAdd(digits, 0, String(digits).length - 1);

  if (String(current).length == 1) {
    return current;
  }

  return current + recursiveDigitsAdded(current);
}

function splitAndAdd(digits, left, right) {
  leftNum = String(digits)[left];
  rightNum = String(digits)[right];

  if (left == right) {
    return Number(leftNum);
  }
  if (left > right) {
    return 0;
  }

  bothEdgeAdd = Number(leftNum) + Number(rightNum);
  return bothEdgeAdd + splitAndAdd(digits, left + 1, right - 1);
}

// 小学校の教師である Coleman は、生徒向けに算数の問題を作成していました。数字で作られたカードをいくつか作成し、並び替えて最も大きな値になるように生徒へ指示を出しました。いくつかの数字カード intArr が与えられるので、数値を並び替えて最大の数値を作成する、largeNumberFormed という関数を作成してください。例えば、[3,30,34,5,9] は、9534330 を返します。（9,5,34,3,30）のように各要素の桁は変更することができません。

// 関数の入出力例

// 入力のデータ型： integer[] intArr

// 出力のデータ型： string

// largeNumberFormed([12,34,56,78,90]) --> 9078563412

// largeNumberFormed([1,2,3,4,5]) --> 54321

// largeNumberFormed([10,20,30,4,5]) --> 54302010

// largeNumberFormed([3,30,34,5,9]) --> 9534330

// largeNumberFormed([39,905,3,30,34,5,9,332]) --> 990553934333230

// largeNumberFormed([14,1412,141415]) --> 141415141412
