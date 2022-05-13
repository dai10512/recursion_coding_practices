function generateAlphabet(firstAlphabet,secondAlphabet){
    // 関数を完成させてください
    let numFirstAlphabet = firstAlphabet.toLowerCase().charCodeAt()
    let numSecondAlphabet = secondAlphabet.toLowerCase().charCodeAt()
    let arr = []

    if (numFirstAlphabet < numSecondAlphabet){
        for(let i = numFirstAlphabet; i <= numSecondAlphabet; i ++){
            arr.push(String.fromCharCode(i))
        }
    }
    else{
        for(let i = numSecondAlphabet; i <= numFirstAlphabet; i ++){
            arr.push(String.fromCharCode(i))
        }
    }
    return arr
}


// 間のアルファベット
// easy
// Sam は a駅、b駅、...y駅、z駅とアルファベットが各駅の名前になっている路線の電車に乗っています。Sam は自分が乗った駅から降りる駅まで、全ての停止場所を確認しました。乗車駅 firstAlphabet、降車駅 secondAlphabet が与えられるので、停止駅を配列として返す、generateAlphabet という関数を定義してください。ただし、アルファベットは大文字と小文字を区別せず、全て小文字で表示し、a に近い文字から返すようにしてください。

// 関数の入出力例

// 入力のデータ型： char firstAlphabet, char secondAlphabet

// 出力のデータ型： char[]

// generateAlphabet('a','z') --> [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]

// generateAlphabet('b','b') --> [b]

// generateAlphabet('C','Z') --> [c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]

// generateAlphabet('M','z') --> [m,n,o,p,q,r,s,t,u,v,w,x,y,z]

// generateAlphabet('z','a') --> [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]