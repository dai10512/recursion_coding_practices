function numberOfWay(n){
    if(n==0){
        return 1
    }
    else if(n==1){
        return 1
    }
   // 関数を完成させてください
    return numberOfWay(n-1) + numberOfWay(n-2)
}

// 1 1 　　　　　　　　1

// 2 1 1　　　　
// 　　　　2　　　　　　　　　　2

// 3 1 1 1
// 　　　　1 2
// 　　　　2 1　　　　　　3

// 4 1 1 1 1
// 　　　　2 1 　1
// 　　　　1 　2 1

// 　　　　1 　1 　2
// 　　　　2 　2 　　　　　　　5