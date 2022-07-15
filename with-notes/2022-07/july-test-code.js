class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName
        this.lastName = lastName
        this.grade = year
    }
    fullName() {
        console.log(`Your full name is ${this.firstName} ${this.lastName}.`)
    }
    static EnrollStudents() {
        console.log("ENROLLING STUDENTS!")
    }
}

let firstStudent = new Student("Jonathan", "Bryant", 19)
let secondStudent = new Student("Logan", "Bryant", 2)
