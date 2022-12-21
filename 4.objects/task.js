class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    setSubject(subjectName) {
        this.subject = subjectName;
        return this;
    }
    exclude(reason) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
    }
    addMark(mark) {
        if (this.marks === undefined) {
            this.marks = [mark];
        } else {
            this.marks.push(mark);
        }
    }
    addMarks(...args) {
        this.marks = Array.from(args);
    }
    getAverage() {
        let sum = 0;
        for (let i = 0; i < this.marks.length; i += 1) {
            sum += this.marks[i];
        }
        return sum / this.marks.length;
    }
}





// ваш код для остальных методов