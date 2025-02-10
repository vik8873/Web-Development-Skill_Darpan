let storeInput = [];
let userInput = (prompt("Enter Your Number"));
let mainInput = parseInt(userInput)

while (userInput != "End") {
    storeInput.push(mainInput)
    userInput = (prompt("Enter Your Number"))
    mainInput = parseInt(userInput)
}
function Sum(a1) {
    let result = 0
    for (let index = 0; index < a1.length; index++) {
        result = result + a1[index];

    }
    return result

}
alert(`The Sum of number is ${Sum(storeInput)}`)