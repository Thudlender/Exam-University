class University {
    name = "";
    location = "";
    constructor(name, location){
        this.name = name;
        this.location = location;
    }

    addDepartment(Department) {
        this.departments.push(Department);
    }

    addStudent(Student) {
        this.students.push(Student);
    }

    addProfessor(Professor) {
        this.professors.push(Professor);
    }

    removeDepartment(Department) {
        delete this.departments(Department);
    }

    removeStudent(Student) {
        delete this.students(Student);
    }

    removeProfessor(Professor) {
        delete this.professors(Professor);
    }

    getDepartments() {
        return this.departments;
    }

    getStudents() {
        return this.students;
    }

    getProfessors() {
        return this.professors;
    }

    toString() {
        // if (this.name = true, this.location = true)
        return `ชื่อ: ${this.name}\n สถานที่: ${this.location}`;
    }
}

class Department {
    constructor(name) {
        this.name = name
    }

    addCourse(Course) {
        this.courses.push(Course);
    }

    removeCourse(Course) {
        delete this.courses(Course);
    }

    addStudent(Student) {
        this.students.push(Student);
    }
    
    removeStudent(Student) {
        delete this.students(Student);
    }

    addProfessor(Professor) {
        this.professors.push(Professor);
    }

    removeProfessor(Professor) {
        delete this.professor(Professor);
    }

    getCourses() {
        return this.courses;
    }

    getStudents() {
        return this.students;
    }

    toString() {
        return `ชื่อ: ${this.name}`;
    }
}

class Person {
    constructor(name, addr, email) {
        this.name = name;
        this.addr = addr;
        this.email = email;
    }
    toString() {
        return `ชื่อ: ${this.name}\n ที่อยู่: ${this.addr}\n อีเมลล์: ${this.email}`;
    }
}

class student extends Person {
    studentId = "";
    year = 0;
    constructor(studentId, year) {
        this.studentId = studentId;
        this.year = year;
    }

    getCourses() {
        return this.courses;
    }

    registerCourse(Course) {
        this.courses.push(Course);
    }

    dropCourse(Course) {
        delete this.courses(Course);
    }

    toString() {
        return `\n ข้อมูลนักเรียน: [รหัส: ${this.studentId}, ปีที่: ${this.year}]`;
    }
}

class Professor extends Person {
    constructor(staffId) {
        this.staffId = staffId
    }

    teachCourse(Course) {
        this.courses.push(Course)
    }

    stopTeachingCourse(Course) {
        return this.courses(Course);
    }

    getCourses() {
        return this.courses
    }
    toString(){
        return `รหัส: ${this.staffId}`;
    }
}

class Course {
    constructor(code, title) {
        this.code = code;
        this.title = title;
    }
    
    addStudent(Student) {
        this.students.push(Student);
    }

    removeStudent(Student) {
        delete this.students(Student);
    }

    setProfessor(Professor) {
        this.professor = Professor;
    }

    getProfessor() {
        return this.professors;
    }

    getStudents() {
        return this.students;
    }

    toString() {
        return `รหัสวิชา: ${this.code}\n รายวิชา: ${this.title}`
    }
}

const main = () =>


main();
