// /* multi line comment*/
// // Arithmetic operators
// let a = 5;
// let b = 6;

// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b); //MOdulus gives remainder
// console.log("a ** b =", a ** b);  //5^6

// /*unary operator need 1 var. 
// 1. increment
// 2. decrement */ 

// let c = 5;
// let d = 6;

// console.log("c = ", c, "d = ", d);
// //c = c + 1; //6
// c++; //shortcut
// console.log("c = ", c); //6

// //assignment operators

// let e = 5;
// let f = 6;

// // e -= 4; //e = a -  4
// // console.log("e = ", e); //1

//Comparision operator

// let a = 5;
// let b = 6;

// console.log("a == b", a == b);  //false , true
// console.log("a != b", a != b);  //false , true

//Logical operator[AND,OR,NOT]

// let a = 6;
// let b = 8;

// let cond1 = a > b; //false
// let cond2 = a < b; //true

// console.log("cond1 && cond2 =",cond1 && cond2); //if both cond is tue then print is true

// // conditional statement

// let age = 25;

// if (age > 18) {
//     console.log("you can vote");
// }

// let age1 = 22;

// if (age >= 18) {
//     console.log("vote");
// } else {
//     console.log("not vote");
// }

// let num = prompt("Enter a number:");

// if (num % 5 === 0) {
//     console.log(num,"is a multiple of 5");
// }  else {
//     console.log(num,"is not a multiple of 5");

// }

//practice question 2

let score = 98;
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if(score >= 70 && score <= 89) {
    grade = "B";
} else if(score >= 60 && score <= 69) {
    grade = "C";
} else if(score >= 50 && score <= 59) {
    grade = "D98";
} else if(score >= 0 && score <= 49) {
    grade = "F";
} 

console.log("according to your scores, your grade was ;",grade);