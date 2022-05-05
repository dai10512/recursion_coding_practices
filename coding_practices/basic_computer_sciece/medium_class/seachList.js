function seachList(numList, value) {
  // 関数を完成させてください
  let result = -1;
  for (let i = 0; i < numList.length; i++) {
    if (numList[i] == value) {
      result = i;
      break;
    }
  }
  return result;
}

// リスト検索
// very easy
// 数値で構成される配列 numList と値 value を受け取り、配列内にある値のインデックスを返す、searchList という関数をハッシュマップを使って作成してください。値がリスト内に複数ある場合は先に出てきたインデックスを返してください。もし発見されない場合は -1 を返してください。

// 関数の入出力例

// 入力のデータ型： integer[] numList, integer value

// 出力のデータ型： integer

// seachList([3,10,23,3,4,50,2,3,4,18,6,1,-2],23) --> 2

// seachList([3,10,23,3,4,50,2,3,4,18,6,1,-2],-2) --> 12

// seachList([3,10,23,3,4,50,2,3,4,18,6,1,-2],100) --> -1
