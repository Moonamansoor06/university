class University {
    uni_name;
    uni_address;
    uni_telephone;
    uni_email;
    constructor(uni_name, uni_address, uni_telephone, uni_email) {
        this.uni_name = uni_name;
        this.uni_address = uni_address;
        this.uni_telephone = uni_telephone;
        this.uni_email = uni_email;
    }
    set uniName(name) {
        this.uni_name = name;
    }
    get uniName() {
        return this.uni_name;
    }
    set uniaddress(address) {
        this.uni_address = address;
    }
    get uniaddress() {
        return this.uni_address;
    }
    set unitelaphone(telephone) {
        this.uni_telephone = telephone;
    }
    get unitelephone() {
        return this.uni_telephone;
    }
    set uniemail(email) {
        this.uni_email = email;
    }
    get uniemail() {
        return this.uni_email;
    }
}
class Department {
    subjects;
    constructor(subjects) {
        this.subjects = subjects;
    }
}
class Courses extends Department {
    courseTitle;
    subSections;
    timings;
    duration;
    constructor(subjects, courseTitle, subSections, timings, duration) {
        super(subjects);
        this.courseTitle = courseTitle;
        this.subSections = subSections;
        this.timings = timings;
        this.duration = duration;
    }
}
class Person {
    personName;
    address;
    telephone;
    email;
    constructor(personName, address, telephone, email) {
        this.personName = personName;
        this.address = address;
        this.telephone = telephone;
        this.email = email;
    }
}
class Student extends Person {
    studentId;
    attendence;
    subject;
    constructor(personName, address, telephone, email, studentId, attendence, subject) {
        super(personName, address, telephone, email);
        this.studentId = studentId;
        this.attendence = attendence;
        this.subject = subject;
    }
}
class Teacher extends Person {
    teacherId;
    subject;
    qualification;
    experience;
    attendence;
    constructor(personName, address, telephone, email, teacherId, attendence, subject, qualification, experience) {
        super(personName, address, telephone, email);
        this.teacherId = teacherId;
        this.attendence = attendence;
        this.qualification = qualification;
        this.experience = experience;
        this.subject = subject;
    }
}
let student1 = new Student('ahmed', 'jauhar', '34613450', 'abc@g.com', 'stu001', 100, 'bio');
let student2 = new Student('aamir', 'jauharabad', '34613350', 'efg@g.com', 'stu002', 100, 'bio');
let teacher1 = new Teacher('ali', 'gulshan', '02145638', '', 'T001', 110, 'physics', 'phd', '4 years');
let teacher2 = new Teacher('aslam', 'gulshan-e-hadeed', '0214563438', 'aaa@mail.com', 'T002', 115, 'bio', 'phd', '15 years');
class studentClass {
    students;
    setStu(students) {
        this.students = students;
    }
}
let Studentlist = new studentClass;
Studentlist.setStu([student1, student2]);
console.log(Studentlist);
class teacherClass {
    teachers;
    setTeacher(teachers) {
        this.teachers = teachers;
    }
}
let teacherlist = new teacherClass;
teacherlist.setTeacher([teacher1, teacher2]);
console.log(teacherlist.teachers[0]);
let course1 = new Courses('bio', 'bsc', 'morning', '8am to 2pm', '4years');
class courseClass {
    courses;
    setCourse(courses) {
        this.courses = courses;
    }
}
let courseslist = new courseClass;
courseslist.setCourse([course1]);
console.log(teacherlist);
let university = new University('LMS', 'lahore', '1354664', 'lms@lms.edu.pk');
console.log(university);
export {};
