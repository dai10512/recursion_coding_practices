function insertionSort(arr) {
  // 関数を完成させてください

  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];

    for (let j = i - 1; j >= 0; j--) {
      if (currentValue <= arr[j]) {
        arr[j + 1] = arr[j];
        arr[j] = currentValue;
      } else break;
    }
  }
  return arr;
}

// 挿入ソート
// easy
// 整数で構成される配列 arr が与えられるので、挿入ソートアルゴリズムを実装し、配列を昇順で返す insertionSort という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer[] arr

// 出力のデータ型： integer[]

// insertionSort([2,12,5,10,9,8]) --> [2,5,8,9,10,12]

// insertionSort([1,5,3,4,3,1,6]) --> [1,1,3,3,4,5,6]

// insertionSort([11,45,32,75,88,15,15]) --> [11,15,15,32,45,75,88]
