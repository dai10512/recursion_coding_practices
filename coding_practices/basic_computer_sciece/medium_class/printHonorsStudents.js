class Student {
  constructor(studentId, firstName, lastName, gradeLevel) {
    this.studentId = studentId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gradeLevel = gradeLevel;
  }

  getStudentInfo() {
    // console.log(this.studentId + ': ' + this.firstName + ' ' + this.lastName +'(' + this.gradeLevel + 'gr)')
    return (
      this.studentId +
      ": " +
      this.firstName +
      " " +
      this.lastName +
      "(" +
      this.gradeLevel +
      "gr)"
    );
  }
}

class Classroom {
  constructor(students, courseName, teacher) {
    this.students = students;
    this.courseName = courseName;
    this.teacher = teacher;
  }

  getClassIdentity() {
    return this.courseName + " managed by " + this.teacher;
  }

  getNumberOfStudents() {
    return this.students.length;
  }
}

function printHonorsStudents(school) {
  for (let i = 0; i < school.length; i++) {
    // console.log(school[i].students)
    // all students
    for (let j = 0; j < school[i].students.length; j++) {
      if (school[i].students[j].gradeLevel >= 10) {
        console.log(
          school[i].students[j].getStudentInfo() +
            " from " +
            school[i].teacher +
            "'s class"
        );
      }
    }
  }
}

classroom1 = new Classroom(
  [
    new Student("AC-343424", "James", "Smith", 6),
    new Student("AC-343428", "Maria", "Garcia", 5),
    new Student("AC-343434", "Robert", "Johnson", 3),
    new Student("AC-343454", "Danny", "Robertson", 10),
  ],
  "Algebra II",
  "Emily Theodore"
);
classroom2 = new Classroom(
  [
    new Student("AC-340014", "Kent", "Carter", 9),
    new Student("AC-340024", "Isaiah", "Chambers", 10),
    new Student("AC-340018", "Leta", "Ferguson", 7),
  ],
  "English",
  "Daniel Pherb"
);

school = [classroom1, classroom2];
printHonorsStudents(school);

// 成績優秀者
// easy
// 問題 472, 473 で以下の Student クラス、Classroom クラスを作成しました。

// String studentId	識別番号
// String firstName	生徒の名前
// String lastName	生徒の名字
// int gradeLevel	学年
// String getStudentInfo()	生徒の情報を「識別番号：フルネーム(学年)」として返します。
// Student[] students	生徒オブジェクトを格納した固定配列
// String courseName	科目名
// String teacher	教員名
// String getClassIdentity()	教室の情報を「科目名 managed by 教員名」として返します。
// int getNumberOfStudents()	生徒の数を返します。
// それでは、生徒の配列が状態の一部として含まれている Classroom クラスのリストである学校を作成し、成績優秀者のみを出力する printHonorStudents という関数を作成し、テストケースを出力してください。成績優秀者は gradeLevel の値が 10 以上の場合とします。また出力は、「識別番号：フルネーム(学年) from 教員's class」として返してください。

// テストケース

// classroom1 = new Classroom([new Student("AC-343424", "James", "Smith", 6), new Student("AC-343428", "Maria", "Garcia", 5),new Student("AC-343434", "Robert", "Johnson", 3),new Student("AC-343454","Danny", "Robertson",10)], "Algebra II", "Emily Theodore")

// classroom2 = new Classroom([new Student("AC-340014","Kent", "Carter",9), new Student("AC-340024","Isaiah", "Chambers",10),new Student("AC-340018","Leta", "Ferguson",7)], "English", "Daniel Pherb")

// school = [classroom1, classroom2]

// printHonorsStudents(school)

// --> AC-343454: Danny Robertson(10gr) from Emily Theodore's class

// --> AC-340024: Isaiah Chambers(10gr) from Daniel Pherb's class
