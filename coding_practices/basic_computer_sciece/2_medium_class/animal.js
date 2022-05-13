class Animal{
    constructor(name,weightKg,heightM,isPredetor,speedKph){
        this.name = name;
        this.weightKg= weightKg;
        this.heightM = heightM;
        this.isPredetor = isPredetor;
        this.speedKph = speedKph;
        this.activeMultiplier = 1.2;
    }

    getBmi(){
        return Math.floor(this.weightKg / (this.heightM * this.heightM) * 100) /100
    }

    getDailyCalories(){
        return Math.floor(70 * Math.pow(this.weightKg, 0.75) * this.activeMultiplier * 100 ) / 100
    }

    isDangerous(){
        return this.isPredetor ||  this.heightM >= 1.7 || this.speedKph >= 35
    }
}

rabbit = new Animal("rabbit", 10, 0.3, false, 20)
console.log(rabbit.getBmi())
console.log(rabbit.isDangerous())


snake = new Animal("snake", 30, 1, true, 30)
console.log(snake.isDangerous())
console.log(snake.getDailyCalories())


elephant = new Animal("elephant", 300, 3, false, 5)
console.log(elephant.getBmi())
console.log(elephant.getDailyCalories())


gazelle = new Animal("gazelle", 50, 1.5, false, 100)
console.log(gazelle.getDailyCalories())
console.log(gazelle.isDangerous())



// String name	動物の名前
// double weightKg	動物の体重
// double heightM	動物の身長
// boolean isPredator	捕食者かどうか
// double speedKph	動物の時速
// double activityMultiplier	どれほど動物が活発的か表す数字。動物園の動物は檻に入れられているので活動が制限されているとみなし、活動指数を 1.2 とします。
// double getBmi()	動物の BMI を返します。kg / (heightM2) を使ってください。小数点第 2 位以下を切り捨ててください。
// double getDailyCalories()	動物が毎日どれほどのカロリーを消費する必要があるか返します。計算式は (70 × weightKg0.75) × activityMultiplier で求めることができます。小数点第 2 位以下を切り捨ててください。
// boolean isDangerous()	動物が危険かどうか判断するブーリアン値を返します。動物が捕食者だった場合、危険とみなされ、身長が 1.7 メートル以上、もしくは時速 35km/h 以上の場合も危険とみなされます。
// テストケース

// rabbit = new Animal("rabbit", 10, 0.3, false, 20)

// rabbit.getBmi() --> 111.11

// rabbit.isDangerous() --> false


// snake = new Animal("snake", 30, 1, true, 30)

// snake.isDangerous() --> true

// snake.getDailyCalories() --> 1076.76


// elephant = new Animal("elephant", 300, 3, false, 5)

// elephant.getBmi() --> 33.33

// elephant.getDailyCalories() --> 6055.08


// gazelle = new Animal("gazelle", 50, 1.5, false, 100)

// gazelle.getDailyCalories() --> 1579.45

// gazelle.isDangerous() --> true