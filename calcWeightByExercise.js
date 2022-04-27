function calcWeightByExercise(exercise, minutes) {
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

  weight = 85.5;
  oneMinConsumeKcal = (met * 3.5 * weight) / 200;
  totalCosnumeKcal = oneMinConsumeKcal * minutes;
  looseWeight = totalCosnumeKcal / 7700;
  return Math.floor((weight - looseWeight) * 10) / 10;
}

// 減少した体重
// easy
// ダイエット中の Carly は、運動によって計算上は体重がどれくらい減少しているはずなのかを調べることにしました。運動の種類と運動した時間（分）が与えられるので、運動によって消費したカロリーから体重が何キロになったのかを計算するcalcWeightByExercise という関数を定義してください。ただし、出力は小数第 2 位以降を切り取ってください。

// Carly の現在の体重は 85.5kg とし、燃焼カロリーは MET（Metabnolic Equivalent of Task）を使って計算します。1 分あたりの消費カロリーを求める計算式と 1 キロ消費するのに必要なカロリーおよび、運動ごとの運動強度（met）は以下の通りです。

// 運動の種類	運動強度[met]
// running	8
// walking	3
// tennis	5
// rope jump	9
// 1 分あたりの消費カロリー = 1 分あたりの運動強度[met] × 3.5 × 体重[Kg] ÷ 200
// 1 キロ消費するのに必要なカロリー数 = 7700 キロカロリー
// 関数の入出力例

// 入力のデータ型： string exercise, integer minutes

// 出力のデータ型： double-float

// calcWeightByExercise("running",100) --> 85.3

// calcWeightByExercise("walking",150) --> 85.4

// calcWeightByExercise("tennis",120) --> 85.3

// calcWeightByExercise("rope jump",30) --> 85.4
