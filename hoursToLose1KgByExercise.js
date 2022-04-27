function hoursToLose1KgByExercise(exercise) {
  // 関数を完成させてください
  switch (exercise) {
    case "running":
      met = 8;
      break;
    case "walking":
      met = 3;
      break;
    case "tennis":
      met = 5;
      break;
    case "rope jump":
      met = 9;
      break;
  }
  console.log(met);
  weigtness = 85.5;
  // 1kgあたりの消費カロリー
  oneMinConsumeCalorie = (met * 3.5 * weigtness) / 200;
  totalCalorie = 7700;
  totalKilloCalolie = totalCalorie;
  return Math.floor((totalKilloCalolie / oneMinConsumeCalorie / 60) * 10) / 10;
}

// カロリー計算
// easy
// ダイエットのために運動を続けている Carly は、今行っている運動をどれくらい続けたら 1kg 痩せるのか気になっています。運動の種類が文字列として与えられるので、その運動によって 1kg 体重が減るまでに何時間かかるのか計算する hoursToLose1KgByExercise という関数を定義してください。ただし、出力は小数第 2 位以降を切り取ってください。

// Carly の現在の体重は 85.5kg とし、燃焼カロリーは MET（Metabnolic Equivalent of Task）を使って計算します。1 分あたりの消費カロリーを求める計算式と 1 キロ消費するのに必要なカロリーおよび、運動ごとの運動強度（met）は以下の通りです。

// 運動の種類	運動強度[met]
// running	8
// walking	3
// tennis	5
// rope jump	9
// 1 分あたりの消費カロリー = 1 分あたりの運動強度[met] × 3.5 × 体重[Kg] ÷ 200
// 1 キロ消費するのに必要なカロリー数 = 7700 キロカロリー
// 関数の入出力例

// 入力のデータ型： string exercise

// 出力のデータ型： double-float

// hoursToLose1KgByExercise("running") --> 10.7

// hoursToLose1KgByExercise("walking") --> 28.5

// hoursToLose1KgByExercise("tennis") --> 17.1

// hoursToLose1KgByExercise("rope jump") --> 9.5
