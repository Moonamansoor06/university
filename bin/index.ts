import { question } from 'readline-sync';

class University {
  private uni_name: string;
  private uni_address: string;
  private uni_telephone: string;
  private uni_email: string;
  constructor(
    uni_name: string,
    uni_address: string,
    uni_telephone: string,
    uni_email: string
  ) {
    this.uni_name = uni_name;
    this.uni_address = uni_address;
    this.uni_telephone = uni_telephone;
    this.uni_email = uni_email;
  }

  set uniName(name: string) {
    this.uni_name = name;
  }
  get uniName() {
    return this.uni_name;
  }
  set uniaddress(address: string) {
    this.uni_address = address;
  }

  get uniaddress() {
    return this.uni_address;
  }
  set unitelaphone(telephone: string) {
    this.uni_telephone = telephone;
  }
  get unitelephone() {
    return this.uni_telephone;
  }
  set uniemail(email: string) {
    this.uni_email = email;
  }

  get uniemail() {
    return this.uni_email;
  }
}

class Department {
  protected subject: string;
  constructor(subject: string) {
    this.subject = subject;
  }

}
class Courses extends Department {
  courseTitle: string;
  sections:string
  subSections: string;
  timings: string;
  duration: string;

  constructor(
    subjects: string,
    courseTitle: string,
    sections:string,
    subSections: string,
    timings: string,
    duration: string
  ) {
    super(subjects);
    this.courseTitle = courseTitle;
    this.sections=sections
    this.subSections = subSections;
    this.timings = timings;
    this.duration = duration;
  }

}

class Person {
  protected personName: string;
  protected address: string;
  protected telephone: string;
  protected email: string;

  constructor(
    personName: string,
    address: string,
    telephone: string,
    email: string
  ) {
    this.personName = personName;
    this.address = address;
    this.telephone = telephone;
    this.email = email;
  }
  setpName(name: string) {
    this.personName = name;
  }
  getpName() {
    return this.personName;
  }
  setpaddress(address: string) {
    this.address = address;
  }

  getpaddress() {
    return this.address;
  }
  setptelephone(telephone: string) {
    this.telephone = telephone;
  }
  getptelephone() {
    return this.telephone;
  }
  setpemail(email: string) {
    this.email = email;
  }

  getpemail() {
    return this.email;
  }

}
class Student extends Person {
  studentId: string;
   attendence: number;
   courseTitle:string;
  subject: string;

  constructor(
    personName: string,
    address: string,
    telephone: string,
    email: string,
    studentId: string,
    attendence: number,
    subject: string,
    courseTitle:string
  ) {
    super(personName, address, telephone, email);
    this.studentId = studentId;
    this.attendence = attendence;
    this.subject = subject;
    this.courseTitle=courseTitle
  }

}
class Teacher extends Person {
  teacherId: string;
  subject: string;
  sections:string;
  qualification: string;
  experience: string;
  attendence: number;
  constructor(
    personName: string,
    address: string,
    telephone: string,
    email: string,
    teacherId: string,
    attendence: number,
    subject: string,
    sections:string,
    qualification: string,
    experience: string
  ) {
    super(personName, address, telephone, email);
    this.teacherId = teacherId;
    this.attendence = attendence;
    this.qualification = qualification;
    this.experience = experience;
    this.subject = subject;
    this.sections=sections
  }


}


let student1:Student=new Student('ahmed','jauhar','34613450','abc@g.com','stu001',100,'bio','bsc')
let student2:Student=new Student('aamir','jauharabad','34613350','efg@g.com','stu002',100,'bio','msc')
let teacher1=new Teacher('ali','gulshan','02145638','','T001',110,'physics','mr2','phd','4 years')
let teacher2=new Teacher('aslam','gulshan-e-hadeed','0214563438','aaa@mail.com','T002',115,'bio','mr01','phd','15 years')

class studentClass{
    students:Student[]
    setStu(students:Student[]){
  this.students=students
    }
}
let Studentlist=new studentClass
Studentlist.setStu([student1,student2])
console.log('student list ',Studentlist.students)

class teacherClass{
    teachers:Teacher[]
    setTeacher(teachers:Teacher[]){
  this.teachers=teachers
    }
}
let teacherlist=new teacherClass
teacherlist.setTeacher([teacher1,teacher2])
console.log(teacherlist.teachers[0])


let course1=new Courses('bio','bsc','morning','mr-1','8am to 2pm','4years')
class courseClass{
    courses:Courses[]
    setCourse(courses:Courses[]){
  this.courses=courses
    }
}
let courseslist=new courseClass
courseslist.setCourse([course1])
console.log(teacherlist)

let university=new University('LMS','lahore','1354664','lms@lms.edu.pk')
console.log(university)

function information(){
    let user_input = question('enter student id ');
    //console.log('checking fields',Studentlist.students[0])
Studentlist.students.map((stu,i)=>{  
    // 
    if(stu.studentId===user_input)
       {
       console.log(`\n student name: ${stu.getpName()}\n address:${stu.getpaddress()} \n telephone: ${stu.getptelephone()} \n email:${stu.getpemail()} \n course: ${stu.courseTitle} \n attendence: ${stu.attendence} \n `)}
 
})
      
    }

information()

