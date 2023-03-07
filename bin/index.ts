import { question, keyInSelect } from "readline-sync";
import clear from "clear"
import figlet from "figlet";
import colors from "colors";
import { v4 as uuidv4 } from 'uuid';



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
  subject: string;
  courses: string[];
  constructor(subject: string, courses: string[]) {
    this.subject = subject;
    this.courses = courses;
  }
  setdepart(subject: string) {
    this.subject = subject;
  }
  getdepart() {
    return this.subject;
  }
}
class Courses {
  subjects: string;
  courseTitle: string;
  sections: string;
  subSections: string;
  timings: string;
  duration: string;
  fee:number;
  students: [];
  teacher: [];
  constructor(
    subjects: string,
    courseTitle: string,
    sections: string,
    subSections: string,
    timings: string,
    duration: string,
    fee:number,
    students: [],
    teacher: []
  ) {
    this.subjects = subjects;
    this.courseTitle = courseTitle;
    this.sections = sections;
    this.subSections = subSections;
    this.timings = timings;
    this.duration = duration;
    this.fee-this.fee
  }
}

class Person {
  personName: string;
address: string;
  telephone: string;
  email: string;

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
  // setpName(name: string) {
  //   this.personName = name;
  // }
  // getpName() {
  //   return this.personName;
  // }
  // setpaddress(address: string) {
  //   this.address = address;
  // }

  // getpaddress() {
  //   return this.address;
  // }
  // setptelephone(telephone: string) {
  //   this.telephone = telephone;
  // }
  // getptelephone() {
  //   return this.telephone;
  // }
  // setpemail(email: string) {
  //   this.email = email;
  // }

  // getpemail() {
  //   return this.email;
  // }
}
class Student extends Person {
  studentId: string;
  attendence: number;
  courseTitle: string;
  subject: string;
  dueFee:number;
  paid:boolean;
  

  constructor(
    personName: string,
    address: string,
    telephone: string,
    email: string,
    studentId: string,
    attendence: number,
    subject: string,
    courseTitle: string,
    dueFee:number,
    paid:boolean
  ) {
    super(personName, address, telephone, email);
    this.studentId = studentId;
    this.attendence = attendence;
    this.subject = subject;
    this.courseTitle = courseTitle;
    this.dueFee=dueFee;
    this.paid=false
  
  }
}
class Teacher extends Person {
  teacherId: string;
  subject: string;
  sections: string;
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
    sections: string,
    qualification: string,
    experience: string
  ) {
    super(personName, address, telephone, email);
    this.teacherId = teacherId;
    this.attendence = attendence;
    this.qualification = qualification;
    this.experience = experience;
    this.subject = subject;
    this.sections = sections;
  }
}

let student1: Student = new Student(
  "ahmed",
  "jauhar",
  "34613450",
  "abc@g.com",
  "stu001",
  100,
  "bio",
  "bsc",
  0,
  false
);
let student2: Student = new Student(
  "aamir",
  "jauharabad",
  "34613350",
  "efg@g.com",
  "stu002",
  100,
  "bio",
  "msc",
  0,
  false
);
let student3: Student = new Student(
  "seema",
  "nazimabad",
  "3479900",
  "abc@g.com",
  "stu003",
  100,
  "bio",
  "bsc",
  0,
  false
);
let student4: Student = new Student(
  "zohra",
  "sharfabad",
  "35413350",
  "efg@g.com",
  "stu004",
  100,
  "bio",
  "msc",
  0,
  false
);

let student5: Student = new Student(
  "aenyl",
  "jauhar",
  "34613450",
  "abc@g.com",
  "stu005",
  100,
  "physics",
  "bsc",0,
  false
);
let student6: Student = new Student(
  "zariya",
  "jauharabad",
  "34613350",
  "efg@g.com",
  "stu006",
  100,
  "physics",
  "msc",
  0,
  false
);
let student7: Student = new Student(
  "anum",
  "nazimabad",
  "3479900",
  "abc@g.com",
  "stu007",
  100,
  "physics",
  "bsc",
  0, 
  false
);
let student8: Student = new Student(
  "khalid",
  "sharfabad",
  "35413350",
  "efg@g.com",
  "stu008",
  100,
  "physics",
  "msc",0,
  false
);
let teacher1 = new Teacher(
  "ali",
  "gulshan",
  "02145638",
  "",
  "T001",
  110,
  "physics",
  "mr2",
  "phd",
  "4 years"
);
let teacher2 = new Teacher(
  "aslam",
  "gulshan-e-hadeed",
  "0214563438",
  "aaa@mail.com",
  "T002",
  115,
  "bio",
  "mr01",
  "phd",
  "15 years"
);

class studentClass {
  students: Student[];
  setStu(students: Student[]) {
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
  teachers: Teacher[];
  setTeacher(teachers: Teacher[]) {
    this.teachers = teachers;
  }
}
let teacherlist = new teacherClass();
teacherlist.setTeacher([teacher1, teacher2]);
//console.log(teacherlist.teachers[0]);

let course1 = new Courses(
  "bio",
  "bsc",
  "morning",
  "mr-1",
  "8am to 2pm",
  "4years",
  20000,
  [],
  []
);
let course2 = new Courses(
  "bio",
  "msc",
  "morning",
  "mr-2",
  "8am-2pm",
  "2 years",
  40000,
  [],
  []
);
let course3 = new Courses(
  "physics",
  "bsc",
  "morning",
  "mr-1",
  "8am to 2pm",
  "4years",
  35000,
  [],
  []
);
let course4 = new Courses(
  "physics",
  "msc",
  "morning",
  "mr-2",
  "8am-2pm",
  "2 years",
  40000,
  [],
  []
);
class courseClass {
  courses: Courses[];
  setCourse(courses: Courses[]) {
    this.courses = courses;
  }
}
let courseslist = new courseClass();
courseslist.setCourse([course1, course2, course3, course4]);
class departmentClass {
  department: Department[];
  setDepartment(department: Department[]) {
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
  let user_input = question("enter student id ");
 // console.log("checking fields", user_input);
  Studentlist.students.map((stu, i) => {
    //
    if (stu.studentId === user_input) {
      console.log(
        `\n student name: ${stu.personName}\n address:${stu.address} \n telephone: ${stu.telephone} \n email:${stu.email} \n course: ${
          stu.courseTitle
        } \n attendence: ${stu.attendence} \n `
      );
    }
  });
}

function departmentInformation() {
  let user_input = question("enter department ");

  departmentlist.department.map((depart, i) => {
   
    if (depart.subject === user_input) { 
      console.log("Courses being offered in the department",depart.courses)
      const result = Studentlist.students.filter((obj) => {
        return obj.subject === depart.subject;
      });
      let count = 0;
      result.map((res, ind) => {
        count = count + 1;
        console.log("students enrolled")
        console.log(
          `\nStudent id: ${res.studentId}  Student name: ${res.personName } Course enrolled ${res.courseTitle}`
        );
      });
      console.log("Total number of students is ", count);
      count = 0;

    }
    
  });
}

function courseInformation() {
  let user_input = question("\n enter department ");
  let user_input2 = question("\nenter course title ");
  courseslist.courses.map((cou, i) => {
    //    console.log('course',cou.courseTitle)
    //    console.log(`course depart ${cou.getdepart()===user_input}`)
    //    console.log(`course title ${cou.courseTitle===user_input2}`)
    if (cou.courseTitle === user_input && cou.courseTitle === user_input2) {
      const result = Studentlist.students.filter((obj) => {
        return (
          obj.subject === cou.courseTitle && obj.courseTitle === cou.courseTitle
        );
      });
      let count = 1;
      result.map((res, ind) => {
        count = count + ind;

        console.log(
          `\nStudent id: ${res.studentId}  Student name: ${res.personName}`
        );
      });
      console.log("Total number of students is ", count);
    }
  });
}


function enroll(stu: Student ): Student{
 Studentlist.students.push(stu)
   return stu
  }

  function enterStu()
  {let  personName:string=question('enter name: ')
  let address:string=question('enter address: ')
  let telephone:string=question('enter telephone: ')
  let email:string=question('enter email: ')
  let attendence:number=Number(question('enter attendance: '))
  let subject:string=question('enter subject: ')
  let courseTitle:string=question('enter course: ')
  let dueFee:number= Number(question('enter fee: '))
  let paid:boolean=false
  let uid=uuidv4()  
  let  studentId:string='stu'.concat(uid.substr(0,3))  
  

   let newStu={ personName,address,telephone,email,studentId,attendence,courseTitle,subject,dueFee,paid}  
 
return newStu
}
  
  
  
function payFee(){
let stu=question('enter id: ')
Studentlist.students.map((stud)=>{
  if(stud.studentId===stu){
    console.log('your are required to pay', stud.dueFee)
    let ans=question("do you wish to pay y/n : ")
    if(ans==='y'||ans==='Y')
    console.log('thanks your fee is paid')
     stud.paid=true
    console.log(stud)
    
    }

})

}
function enquiry(){const list = ["student", "department", "course"];
const enquiry = question('Enquiry choices="student,course,department": ', {
  limit: list,
});

if (enquiry === "student") {
  StudentInformation();
} else if (enquiry === "department") {
  departmentInformation();
} else if (enquiry === "course") {
  courseInformation();
}
}
function enrollStu(){ let stu1= enroll(enterStu())
  console.log(stu1)}


clear();

console.log(``);
console.log(colors.green("----------------------------------------------------------------------------------"))
console.log(
  
    figlet.textSync("University system")
  );

  console.log(colors.green("--------------------------------------------------------------------------------"))
console.log(university);

console.log("\n");
const msg1 = colors.rainbow("select your required operation ");
const msg2 = colors.rainbow(" department inquiry  ");
const msg3 = colors.rainbow(" course inquiry  ");
console.log("");


async function oper() {
 
      let operate = keyInSelect(["enquiry","enroll","pay fee"],"Select operation: ")
    
         operate=operate+1
         
         if(operate===1)
      
       
               enquiry()
            if(operate===2)       
              
                 enrollStu()
              if(operate===3)  
                payFee()
              
          
           

}
async function doAgain() {
  let msg4 = colors.green('\n Do you wish to continue, press y or Yes');
  let playAgain;
  do {
      await oper();
      playAgain =question(msg4)
  } while (playAgain == 'yes' || playAgain == 'y' || playAgain == 'Yes' || playAgain == 'Y');
}
;
doAgain();