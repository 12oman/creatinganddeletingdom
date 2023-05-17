// Function to create a new button
function createNewButton() {
  // Create new button
  console.log("createNewButton");
}

// Initial button
let initialButton = document.createElement("button");
initialButton.innerHTML = "First";
document.body.appendChild(initialButton);

// Array to store the buttons
let buttons = [initialButton];

initialButton.addEventListener("click", createNewButton);
