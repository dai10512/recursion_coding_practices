function maximumPeople(x,y){
    // 関数を完成させてください
    if ((x % y) == 0){
        // ベースケース
        console.log('part1')
        return y;
    } else {
        console.log('part2')
        return maximumPeople(y, x % y);
    }
}