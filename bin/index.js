"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
const clear_1 = __importDefault(require("clear"));
const figlet_1 = __importDefault(require("figlet"));
const colors_1 = __importDefault(require("colors"));
const uuid_1 = require("uuid");
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
    subject;
    courses;
    constructor(subject, courses) {
        this.subject = subject;
        this.courses = courses;
    }
    setdepart(subject) {
        this.subject = subject;
    }
    getdepart() {
        return this.subject;
    }
}
class Courses {
    subjects;
    courseTitle;
    sections;
    subSections;
    timings;
    duration;
    fee;
    students;
    teacher;
    constructor(subjects, courseTitle, sections, subSections, timings, duration, fee, students, teacher) {
        this.subjects = subjects;
        this.courseTitle = courseTitle;
        this.sections = sections;
        this.subSections = subSections;
        this.timings = timings;
        this.duration = duration;
        this.fee - this.fee;
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
    courseTitle;
    subject;
    dueFee;
    paid;
    constructor(personName, address, telephone, email, studentId, attendence, subject, courseTitle, dueFee, paid) {
        super(personName, address, telephone, email);
        this.studentId = studentId;
        this.attendence = attendence;
        this.subject = subject;
        this.courseTitle = courseTitle;
        this.dueFee = dueFee;
        this.paid = false;
    }
}
class Teacher extends Person {
    teacherId;
    subject;
    sections;
    qualification;
    experience;
    attendence;
    constructor(personName, address, telephone, email, teacherId, attendence, subject, sections, qualification, experience) {
        super(personName, address, telephone, email);
        this.teacherId = teacherId;
        this.attendence = attendence;
        this.qualification = qualification;
        this.experience = experience;
        this.subject = subject;
        this.sections = sections;
    }
}
let student1 = new Student("ahmed", "jauhar", "34613450", "abc@g.com", "stu001", 100, "bio", "bsc", 0, false);
let student2 = new Student("aamir", "jauharabad", "34613350", "efg@g.com", "stu002", 100, "bio", "msc", 0, false);
let student3 = new Student("seema", "nazimabad", "3479900", "abc@g.com", "stu003", 100, "bio", "bsc", 0, false);
let student4 = new Student("zohra", "sharfabad", "35413350", "efg@g.com", "stu004", 100, "bio", "msc", 0, false);
let student5 = new Student("aenyl", "jauhar", "34613450", "abc@g.com", "stu005", 100, "physics", "bsc", 0, false);
let student6 = new Student("zariya", "jauharabad", "34613350", "efg@g.com", "stu006", 100, "physics", "msc", 0, false);
let student7 = new Student("anum", "nazimabad", "3479900", "abc@g.com", "stu007", 100, "physics", "bsc", 0, false);
let student8 = new Student("khalid", "sharfabad", "35413350", "efg@g.com", "stu008", 100, "physics", "msc", 0, false);
let teacher1 = new Teacher("ali", "gulshan", "02145638", "", "T001", 110, "physics", "mr2", "phd", "4 years");
let teacher2 = new Teacher("aslam", "gulshan-e-hadeed", "0214563438", "aaa@mail.com", "T002", 115, "bio", "mr01", "phd", "15 years");
class studentClass {
    students;
    setStu(students) {
        this.students = students;
    }
}
let Studentlist = new studentClass();
Studentlist.setStu([
    student1,
    student2,
    student3,
    student4,
    student5,
    student6,
    student7,
    student8,
]);
//console.log("student list ", Studentlist.students);
class teacherClass {
    teachers;
    setTeacher(teachers) {
        this.teachers = teachers;
    }
}
let teacherlist = new teacherClass();
teacherlist.setTeacher([teacher1, teacher2]);
//console.log(teacherlist.teachers[0]);
let course1 = new Courses("bio", "bsc", "morning", "mr-1", "8am to 2pm", "4years", 20000, [], []);
let course2 = new Courses("bio", "msc", "morning", "mr-2", "8am-2pm", "2 years", 40000, [], []);
let course3 = new Courses("physics", "bsc", "morning", "mr-1", "8am to 2pm", "4years", 35000, [], []);
let course4 = new Courses("physics", "msc", "morning", "mr-2", "8am-2pm", "2 years", 40000, [], []);
class courseClass {
    courses;
    setCourse(courses) {
        this.courses = courses;
    }
}
let courseslist = new courseClass();
courseslist.setCourse([course1, course2, course3, course4]);
class departmentClass {
    department;
    setDepartment(department) {
        this.department = department;
    }
}
let department1 = new Department("bio", ["bsc", "msc", "pgd"]);
let department2 = new Department("physics", ["bsc", "msc", "pgd"]);
let department3 = new Department("chemistry", ["bsc", "msc", "pgd"]);
let department4 = new Department("IT", ["bsc", "msc", "pgd"]);
let department5 = new Department("pharmacy", ["bsc", "msc", "pgd"]);
let departmentlist = new departmentClass();
departmentlist.setDepartment([
    department1,
    department2,
    department3,
    department4,
    department5
]);
let university = new University("LMS", "lahore", "1354664", "lms@lms.edu.pk");
function StudentInformation() {
    let user_input = (0, readline_sync_1.question)("enter student id ");
    // console.log("checking fields", user_input);
    Studentlist.students.map((stu, i) => {
        //
        if (stu.studentId === user_input) {
            console.log(`\n student name: ${stu.personName}\n address:${stu.address} \n telephone: ${stu.telephone} \n email:${stu.email} \n course: ${stu.courseTitle} \n attendence: ${stu.attendence} \n `);
        }
    });
}
function departmentInformation() {
    let user_input = (0, readline_sync_1.question)("enter department ");
    departmentlist.department.map((depart, i) => {
        if (depart.subject === user_input) {
            console.log("Courses being offered in the department", depart.courses);
            const result = Studentlist.students.filter((obj) => {
                return obj.subject === depart.subject;
            });
            let count = 0;
            result.map((res, ind) => {
                count = count + 1;
                console.log("students enrolled");
                console.log(`\nStudent id: ${res.studentId}  Student name: ${res.personName} Course enrolled ${res.courseTitle}`);
            });
            console.log("Total number of students is ", count);
            count = 0;
        }
    });
}
function courseInformation() {
    let user_input = (0, readline_sync_1.question)("\n enter department ");
    let user_input2 = (0, readline_sync_1.question)("\nenter course title ");
    courseslist.courses.map((cou, i) => {
        //    console.log('course',cou.courseTitle)
        //    console.log(`course depart ${cou.getdepart()===user_input}`)
        //    console.log(`course title ${cou.courseTitle===user_input2}`)
        if (cou.courseTitle === user_input && cou.courseTitle === user_input2) {
            const result = Studentlist.students.filter((obj) => {
                return (obj.subject === cou.courseTitle && obj.courseTitle === cou.courseTitle);
            });
            let count = 1;
            result.map((res, ind) => {
                count = count + ind;
                console.log(`\nStudent id: ${res.studentId}  Student name: ${res.personName}`);
            });
            console.log("Total number of students is ", count);
        }
    });
}
function enroll(stu) {
    Studentlist.students.push(stu);
    return stu;
}
function enterStu() {
    let personName = (0, readline_sync_1.question)('enter name: ');
    let address = (0, readline_sync_1.question)('enter address: ');
    let telephone = (0, readline_sync_1.question)('enter telephone: ');
    let email = (0, readline_sync_1.question)('enter email: ');
    let attendence = Number((0, readline_sync_1.question)('enter attendance: '));
    let subject = (0, readline_sync_1.question)('enter subject: ');
    let courseTitle = (0, readline_sync_1.question)('enter course: ');
    let dueFee = Number((0, readline_sync_1.question)('enter fee: '));
    let paid = false;
    let uid = (0, uuid_1.v4)();
    let studentId = 'stu'.concat(uid.substr(0, 3));
    let newStu = { personName, address, telephone, email, studentId, attendence, courseTitle, subject, dueFee, paid };
    return newStu;
}
function payFee() {
    let stu = (0, readline_sync_1.question)('enter id: ');
    Studentlist.students.map((stud) => {
        if (stud.studentId === stu) {
            console.log('your are required to pay', stud.dueFee);
            let ans = (0, readline_sync_1.question)("do you wish to pay y/n : ");
            if (ans === 'y' || ans === 'Y')
                console.log('thanks your fee is paid');
            stud.paid = true;
            console.log(stud);
        }
    });
}
function enquiry() {
    const list = ["student", "department", "course"];
    const enquiry = (0, readline_sync_1.question)('Enquiry choices="student,course,department": ', {
        limit: list,
    });
    if (enquiry === "student") {
        StudentInformation();
    }
    else if (enquiry === "department") {
        departmentInformation();
    }
    else if (enquiry === "course") {
        courseInformation();
    }
}
function enrollStu() {
    let stu1 = enroll(enterStu());
    console.log(stu1);
}
(0, clear_1.default)();
console.log(``);
console.log(colors_1.default.green("----------------------------------------------------------------------------------"));
console.log(figlet_1.default.textSync("University system"));
console.log(colors_1.default.green("--------------------------------------------------------------------------------"));
console.log(university);
console.log("\n");
const msg1 = colors_1.default.rainbow("select your required operation ");
const msg2 = colors_1.default.rainbow(" department inquiry  ");
const msg3 = colors_1.default.rainbow(" course inquiry  ");
console.log("");
async function oper() {
    let operate = (0, readline_sync_1.keyInSelect)(["enquiry", "enroll", "pay fee"], "Select operation: ");
    operate = operate + 1;
    if (operate === 1)
        enquiry();
    if (operate === 2)
        enrollStu();
    if (operate === 3)
        payFee();
}
async function doAgain() {
    let msg4 = colors_1.default.green('\n Do you wish to continue, press y or Yes');
    let playAgain;
    do {
        await oper();
        playAgain = (0, readline_sync_1.question)(msg4);
    } while (playAgain == 'yes' || playAgain == 'y' || playAgain == 'Yes' || playAgain == 'Y');
}
;
doAgain();
