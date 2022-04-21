function doYouFail(string) {
  // 関数を完成させてください
  aCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "A") {
      aCount++;
    }
  }
  return aCount >= 3 ? "fail" : "pass";
}

// 出席管理
// easy
// R 大学ではどの授業でも 3 回以上欠席すると、単位を取得できない制度です。Participate を表す P と Absence を表す A によって構成される文字列 string が与えられるので、単位取得可能であれば pass、不可能であれば fail を返す、doYouFail という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： string string

// 出力のデータ型： string

// doYouFail("AAPPAP") --> fail

// doYouFail("AAPPAA") --> fail

// doYouFail("PAPPA") --> pass
