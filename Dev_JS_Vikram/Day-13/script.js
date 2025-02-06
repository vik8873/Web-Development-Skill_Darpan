//Part-1 -1
let student = {
    name: "Rahul",
    age: 20,
    course: "B.tech",
    marks: { math: 85, science: 90, english: 78 }
}

//Part- 1--2
student.city = "delhi";
student.age = 21;
student.marks.math = 95;
delete student.course;
console.log(student);

//Part-2

student.getDetails = function () {
    return `${this.name} is ${this.age} years old and lives in ${this.city}.`
}
console.log(student.getDetails());

student.calculateAverage = function() {
    return (this.marks.math + this.marks.science + this.marks.english)/3
}
console.log(student.calculateAverage());

//Part - 3

for (let value in student) {
    console.log(value + ": " + student[value]);
}

// using entries
for (let [key, value] of Object.entries(student)) {
    console.log(key + ": " + value);
}

//Part - 4
let obj1 = { a: 10, b: { c: 20 } };
let obj2 = obj1;
obj2.b.c = 50;
console.log(obj1.b.c);

// 6(a) - Explain what will be the output and why.
// ans is 50 bcz c is nested obj in obj1 so.. - obj2 is refrencing obj1 hence change in obj2 will chnange the value of obj1.

// 7 
//spread opt..
let newDetails = { };
let cloneObject = {
    ...student, ...newDetails
}
console.log(cloneObject);

//assign
let studentClone2 = Object.assign({}, student);

console.log(studentClone2);

//part - 5
//8
let {name,city} = student;
console.log(name);
console.log(city);

//9
newDetail = { hobby:"Reading", age: 22 }

let merge = {...student,...newDetail}
console.log(merge);

//10

function person(name,age,city) {
    this.name = name;
    this.age = age;
    this.city = city;

}

let person1 = new person("Amit", 25, "Mumbai")

console.log(person1);

//bonus que 11

let arrayOfObj = [
    { Name: "Vikram", Age: 20, marks: 98 },
    { Name: "Sejal", Age: 19, marks: 5 },
    { Name: "Sonu", Age: 25, marks: 6 }
];

let max = 0;
let maxname = "";

for (let i = 0; i < arrayOfObj.length; i++) {
    if (arrayOfObj[i].marks > max) {
        max = arrayOfObj[i].marks;
        maxname = arrayOfObj[i].Name;
    }
}

console.log(`Student with highest marks: ${maxname} (${max} marks)`);


    console.log(maxname)
    console.log(max);
 
    // 12
    
function check(p1) {

    return Object.keys(p1).length === 0;
    
}

console.log(check(student));
