class Person {
  // ここからクラス記述してください
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  getInitial() {
    return (
      this.firstName[0].toUpperCase() + "." + this.lastName[0].toUpperCase()
    );
  }
}

let mike = new Person("Michael", "Johnson");
console.log(mike.getFullName());
console.log(mike.getInitial());

let carly = new Person("Carly", "Angelo");
console.log(carly.getFullName());
console.log(carly.getInitial());

let jessie = new Person("Jessie", "Raelynn");
console.log(jessie.getFullName());
console.log(jessie.getInitial());

// Personクラス
// very easy
// 与えられたユーザー名に基づいて、そのイニシャルをアプリ内で表示させるように実装指示が出ました。以下に従って、Person クラスを作成し、テストケースを出力してください。

// String firstName	ユーザーの名
// String lastName	ユーザーの姓
// String getFullName()	ユーザーのフルネームを返します。
// String getInitial()	ユーザーのイニシャルを返します。
