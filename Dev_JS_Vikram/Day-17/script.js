function calculator(operation, num1, num2) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
                return num1 * num2;
        case '/':
                if (num2 === 0) {
                    return "Error: Division by 0 is not allowed";
                }
                return num1 / num2;
                default:
                    return "Error: Invalid operation."
    }
}

let operation = prompt("Enter Operator To Calculate").toLowerCase();
let num1 = parseFloat(prompt("Enter First num"));
let num2 = parseFloat(prompt("Enter Second num"));

alert(calculator(operation, num1, num2))