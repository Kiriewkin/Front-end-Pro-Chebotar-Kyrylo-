function createStudent(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);

    this.averageGrades = function() {
        if (this.grades.length === 0) {
            return 0;
        } else {
            const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
            return sum / this.grades.length;
        }
    };

    this.getAge = function() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    };

    this.present = function() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log(`Все места для отметок посещаемости заполнены.`);
        }
    };

    this.absent = function() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log(`Все места для отметок посещаемости заполнены.`);
        }
    };

    this.getAttendanceRate = function() {
        const validAttendance = this.attendance.filter(att => att !== null);
        if (validAttendance.length === 0) return 0;
        const attended = validAttendance.filter(att => att).length;
        return attended / validAttendance.length;
    };

    this.summary = function() {
        const averageGrades = this.averageGrades();
        const attendanceRate = this.getAttendanceRate();
    
        if (averageGrades > 90 && attendanceRate > 0.9) {
            console.log("Молодець!");
        } else if (averageGrades > 90 || attendanceRate > 0.9) {
            console.log("Добре, але можна краще");
        } else {
            console.log("Редиска!");
        }
    };

}

const student1 = new createStudent("Кирилл", "Чеботарь", 2003);
const student2 = new createStudent("Анна", "Иванова", 2004);
const student3 = new createStudent("Максим", "Петров", 2002);

student1.grades.push(95, 92, 91);
student1.present();
student1.present();
student1.present();
console.log(`${student1.firstName} ${student1.lastName}, Возраст: ${student1.getAge()}, Средний балл: ${student1.averageGrades()}, Рейтинг посещаемости: ${student1.getAttendanceRate()}`);
student1.summary();

student2.grades.push(85, 88);
student2.present();
student2.present();
student2.absent();
console.log(`${student2.firstName} ${student2.lastName}, Возраст: ${student2.getAge()}, Средний балл: ${student2.averageGrades()}, Рейтинг посещаемости: ${student2.getAttendanceRate()}`);
student2.summary();

student3.grades.push(65, 70);
student3.absent();
student3.absent();
student3.absent();
console.log(`${student3.firstName} ${student3.lastName}, Возраст: ${student3.getAge()}, Средний балл: ${student3.averageGrades()}, Рейтинг посещаемости: ${student3.getAttendanceRate()}`);
student3.summary();

