const words = []; // Array to store words
const addButton = document.getElementById("addButton");
const wordContainer = document.getElementById("wordContainer");

addButton.addEventListener("click", function() {
    words.push("Hello"); // Adds the word to the array
    wordContainer.textContent = words.join(" "); // Displays the updated words
});
