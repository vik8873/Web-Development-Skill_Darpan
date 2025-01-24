let number = 100

for(let i = 1; i<=number; i++){
    if (i%2===0) {
        console.log(i)
    }
}

let a = Math.floor(Math.random()*10+1); //to generate integers
console.log(a)
let b = prompt("Guess The Number[1-10]");
while (a!=b) {
    b=prompt("You Entered wrong number ! Plz Try Again")
}
alert("Congartulations!");