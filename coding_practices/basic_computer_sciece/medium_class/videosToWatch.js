function videosToWatch(time,dailyGoal){
    // 関数を完成させてください
    let totalVideoTime = 0
    let numberOfMovies = -1

    for(let i = 0;i < time.length; i ++){
        totalVideoTime += time[i]
        if(totalVideoTime >= dailyGoal){
            numberOfMovies = i + 1
            break
        } 
    }
    return numberOfMovies
}




// 動画視聴
// easy
// 目標勉強時間を表す dailyGoal と各動画を見終わるまでの時間を格納した配列 time が与えられるので、目標を達成するにはいくつ動画を見る必要があるのかを計算して返す videosToWatch という関数を作成してください。動画をすべて見ても目標が達成されない場合は -1 を返してください。

// 関数の入出力例

// 入力のデータ型： integer[] time, integer dailyGoal

// 出力のデータ型： integer

// videosToWatch([1,2,1,3,4],5) --> 4

// videosToWatch([1,2,1,3,4],3) --> 2

// videosToWatch([2,3,1,4,3],15) --> -1