class BankAccount{
    constructor(bankname,ownerName,savings){
        this.bankname = bankname;
        this.ownerName = ownerName;
        this.savings = savings;
    }
    
    depositMoney(depositAmount){
        let fee = 0;
        if(this.savings <= 20000 ){
            fee = 100
        }
        this.savings += depositAmount - fee
        return this.savings
    }

    withdrawMoney(withdrawAmount){
        let finalWithdrawAmount = 0;
        if(withdrawAmount >= this.savings * 0.2){
            finalWithdrawAmount = this.savings * 0.2
        }
        else{
            finalWithdrawAmount = withdrawAmount
        }
        this.savings -= finalWithdrawAmount
        return this.savings   
    }	

    pastime(days){
        return this.savings + days*0.25
    }
}

user1 = new BankAccount("Chase", "Claire Simmmons", 30000)
console.log(user1.withdrawMoney(2000))
console.log(user1.depositMoney(10000))
console.log(user1.pastime(93))


user2 = new BankAccount("Bank Of America", "Remy Clay", 10000)
console.log(user2.withdrawMoney(5000))
console.log(user2.depositMoney(12000))
console.log(user2.pastime(505))


    


// Bank Accountクラス
// easy
// あなたは銀行をシュミレーションするビデオゲームに機能を追加しています。この銀行はプレイヤーのお金を BankAccount クラスで管理し、いくつかの機能を提供します。以下に従って、BankAccount クラスを作成し、テストケースを出力してください。

// String bankName	銀行口座を管理する銀行名
// String ownerName	銀行口座の所有者の名前
// int savings	銀行口座の中に現在ある合計貯蓄額
// int depositMoney(int depositAmount)	depositAmount によって貯蓄額を増やし、その金額を int 型で返します。もし預金前の貯蓄額が $20,000 以下の場合は、$100 の手数料がかかります。
// int withdrawMoney(int withdrawAmount)	withdrawAmount によって貯蓄額を減らし、残りの貯蓄額を整数として返します。最大で貯蓄額の 20% を引き出すことができます。
// double pastime(int days)	口座に毎日 0.25 ドル振り込まれていくとき、貯蓄金額を double 型で返します。
// テストケース

// user1 = new BankAccount("Chase", "Claire Simmmons", 30000)

// user1.withdrawMoney(2000) --> 28000

// user1.depositMoney(10000) --> 38000

// user1.pastime(93) --> 38023.25


// user2 = new BankAccount("Bank Of America", "Remy Clay", 10000)

// user2.withdrawMoney(5000) --> 8000

// user2.depositMoney(12000) --> 19900

// user2.pastime(505) --> 20026.25