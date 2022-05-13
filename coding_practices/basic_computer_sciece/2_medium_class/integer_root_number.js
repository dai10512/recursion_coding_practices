function intSquareRoot(n){
    // 関数を完成させてください
    intSquareRootDouble = intSquareRootHelper(n,1)
    return Math.floor(intSquareRootDouble)
}

//近似値の判定を行う
function isSquareRootCloseEnough(a,b){
    return 100 * Math.abs((a - b) / b) < 0.01;
}

function intSquareRootHelper(n, guess){
    let newGuess = (guess + n/guess)/2

    if(isSquareRootCloseEnough(newGuess,guess)) {
        return guess
    }
    return intSquareRootHelper(n, newGuess)
}


