function Student(name, gender, age) {
this.name = name;
this.gender = gender;
this.age = age;
}

Student.prototype.setSubject = function(subjectName) {
 this.subject = subjectName;
 return this;
}

Student.prototype.exclude = function(reason){
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}

Student.prototype.addMark = function(mark) {
    if ( this.marks === undefined) {
    this.marks = [mark];
    } else {
    this.marks.push(mark);
    }
}

Student.prototype.addMarks = function(...args) {
    if ( this.marks === undefined) {
        this.marks = Array.from(args);
        } else {
            this.marks.push(...args);
        }

}

Student.prototype.getAverage = function () {
    let sum = 0;
    for (let i = 0; i < this.marks.length; i += 1) {
        sum += this.marks[i];
    }
    return sum / this.marks.length
}
// ваш код для остальных методов