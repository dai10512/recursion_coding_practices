function notDivided(x,y){
    // 関数を完成させてください
    message = '1'
    for(let i = 2; i <= x; i ++){
        if(i%y!=0){
            message += '-' + i.toString()
        }
    }
    return message
}


// 割り切れない
// easy
// Jane は体育祭実行委員会に所属しており、クラスから複数人お手伝いを呼ばなければなりません。そこで、出席番号がある特定の値で割り切れない人を呼ぼうと考えています。クラスの人数 x、値 y が与えられるので、お手伝いの出席番号を全て返す関数 notDivided を作成してください。ただし（x,y）≠（1,1）とします。

// 関数の入出力例

// 入力のデータ型： integer x, integer y

// 出力のデータ型： string

// notDivided(20,3) --> 1-2-4-5-7-8-10-11-13-14-16-17-19-20

// notDivided(50,4) --> 1-2-3-5-6-7-9-10-11-13-14-15-17-18-19-21-22-23-25-26-27-29-30-31-33-34-35-37-38-39-41-42-43-45-46-47-49-50

// notDivided(100,2) --> 1-3-5-7-9-11-13-15-17-19-21-23-25-27-29-31-33-35-37-39-41-43-45-47-49-51-53-55-57-59-61-63-65-67-69-71-73-75-77-79-81-83-85-87-89-91-93-95-97-99