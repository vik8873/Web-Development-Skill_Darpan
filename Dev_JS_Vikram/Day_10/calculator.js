// Select screen elements
const outputScreen = document.querySelector(".output");
const buttons = document.querySelectorAll(".input");

// Variable to store the input expression
let expression = "";

// Function to update the display
function updateDisplay() {
    outputScreen.textContent = expression || "0"; // Default to 0 if empty
}

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        // Clear All (AC)
        if (value === "AC") {
            expression = "";
        }
        // Delete last character (X)
        else if (value === "X") {
            expression = expression.slice(0, -1);
        }
        // Evaluate expression (=)
        else if (value === "=") {
            try {
                // Evaluate safely
                expression = eval(expression).toString();
            } catch {
                expression = "Error"; // Handle invalid input
            }
        }
        // Prevent double operators
        else if (["+", "-", "*", "/", "%"].includes(value)) {
            if (expression.length > 0 && !["+", "-", "*", "/", "%"].includes(expression.slice(-1))) {
                expression += value;
            }
        }
        // Append numbers
        else {
            expression += value;
        }

        // Update the display
        updateDisplay();
    });
});

// Initialize screen
updateDisplay();
