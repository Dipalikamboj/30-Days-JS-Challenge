class Person {
    firstName = "Ram";
    lastName = "Kumar";
    age = 11;
    constructor(firstName , lastName , age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(newName) {
        const [firstName, lastName] = newName.split(' ')
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greet() {
        return (`Hello , my name is ${this.name}`);
    }
    UpdateAge(age) {
        this.age = age;
        return (`Updated age is ${age}`)
    }
    static genericGreeting() {
        console.log("this is a generic message");
    }
}

const p1 = new Person('Dipali' , 20)
// console.log(p1.greet());
// console.log(p1.UpdateAge(25));
// console.log(p1);

class Student extends Person {

    static count = 0;
    constructor (name, age, studentId) {
        super(name, age)
        this.studentId = studentId;
        Student.count++;
    }

    

    printStudentDetails() {
        return this.studentId;
    }

    greet() {
        console.log(`Hello from student method, your StudendId is ${this.studentId}`);
    }

    
}

const stu1 = new Student("Aman", 4, 456)
const stu2 = new Student("Aman", 4, 456)
const stu3 = new Student("Aman", 4, 456)
const stu4 = new Student("Aman", 4, 456)
const stu5 = new Student("Aman", 4, 456)
const stu6 = new Student("Aman", 4, 456)
// console.log(stu1.printStudentDetails())
// console.log(stu1.name);
// Person.genericGreeting()

// console.log(Student.count);

const p2 = new Person("Raj", "Kumar", 50)
// console.log(p2.fullName);
p2.fullName = "Prem Pal";
console.log(p2.fullName);

