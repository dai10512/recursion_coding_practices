function towerOfHanoi(discs){
    // 関数を完成させてください
    if(discs == 1){
      return 1
    }
    return 1 + towerOfHanoi(discs-1) * 2
}
// 1 0 1 0
// 2 1 1 1　　　　　　　3
// 3 3 1 3　　　　　　　　7
// 4 7 1 7 　　　　　15
// 5 15 1 15　　　31
