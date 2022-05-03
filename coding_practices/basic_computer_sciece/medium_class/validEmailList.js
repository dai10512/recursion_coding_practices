function validEmailList(emailList){
    // 関数を完成させてください
    let resultList = []

    for(let i = 0; i < emailList.length; i ++){
        if(isEmailValid(emailList[i])){
            resultList.push(emailList[i])
        }
    }
    return resultList
}

function isEmailValid(email){
    let countAtsing = 0
    let domain = ''
    let dotCount = 0

    if(email[0] == '@'){
        return false
    }
    
    for(let j = 0; j < email.length; j ++){
        if(email[j] == ' '){
            return false
        }
        if(email[j] == '@'){
            countAtsing ++
            if(countAtsing >= 2){
                return false
            }
            positionAtSing = j
        }
    }

    domain = email.substring(positionAtSing , email.length)
    for(let j = 0; j < domain.length; j ++){
        if(domain[j] == '.'){
            dotCount ++
        }
    }
    if(dotCount == 0){
        return false
    }
    return true
}


// サブスクリプションリスト
// easy
// Sanchez はメルマガを定期的に配信しています。会員のメールアドレスリスト emailList が与えられるので、正しく利用できるメールアドレスだけを配列として返す validEmailList という関数を定義してください。正しいメールアドレスの条件は以下の通りです。

// - スペースがないこと

// 　
// - 「@」を 1 つのみ含んでいること

// 　
// - 「@」の後に「.」があること

// - 「@」から始まらないこと

// 関数の入出力例

// 入力のデータ型： string[] emailList

// 出力のデータ型： string[]

// validEmailList(["ccc@aaa.com","c@cc@aaa.com","cc c@aaa.com","cc.c@aaa.com"]) --> [ccc@aaa.com,cc.c@aaa.com]

// validEmailList(["c@cc@aaa.com","cc c@aaa.com","cc.c@aaacom"]) --> []

// validEmailList(["ccc@aaa.com","cvsd@a.com","tele@bb.aa","cc.c@aaa.com"]) --> [ccc@aaa.com,cvsd@a.com,tele@bb.aa,cc.c@aaa.com]

// validEmailList(["c@cc@aaa.com","tele@bb.aa","cc.c@aaa.com","ccc@aaa.com"]) --> [tele@bb.aa,cc.c@aaa.com,ccc@aaa.com]