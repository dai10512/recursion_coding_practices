function maximumPeople(x,y){
    while(x % y != 0){
        beforex = x
        x = y
        y = beforex % y
    }
    return y
}


// function maximumPeople(x,y){
//     // 関数を完成させてください
//     if ((x % y) == 0){
//         // ベースケース
//         console.log('part1')
//         return y;
//     } else {
//         console.log('part2')
//         return maximumPeople(y, x % y);
//     }
// }

// 仮想通貨で大儲けした L さんは、ビットコインとイーサリアムを、同じ枚数ずつできるだけ多くの人に配りたいと思いました。ビットコインとイーサリアムの枚数がそれぞれ x, y で与えられるので、配れる人数を返す、maximumPeople という関数を作成してください。

// 例えば、ビットコイン 12 枚とイーサリアム 18 枚を配る場合、ビットコインを 6 人に 2 枚ずつ、イーサリアムを 6 人に 3 枚ずつ配ることができます。

// 関数の入出力例

// 入力のデータ型： integer x, integer y

// 出力のデータ型： integer

// maximumPeople(12,18) --> 6

// maximumPeople(30,242) --> 2

// maximumPeople(1029,1071) --> 21

// maximumPeople(3180,1908) --> 636