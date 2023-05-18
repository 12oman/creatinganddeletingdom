// Function to create a new button
function createNewButton() {
  // define
  const newButton = document.createElement("button");
  // Change the text
  newButton.innerHTML = "{";
  newButton.style = "transform: rotate(90deg);";
  newButton.style.fontSize = "40px";
  // in order to give any agency to the button we need to add an event listener
  newButton.addEventListener("click", createNewButton);

  // append to the body
  document.body.appendChild(newButton);
  // Create new button
  // console.log("createNewButton");
}
// Initial button
let initialButton = document.createElement("button");
initialButton.innerHTML = "{";
// rotate 90 degrees
initialButton.style = "transform: rotate(90deg);";
initialButton.style.fontSize = "50px";
document.body.appendChild(initialButton);

// Array to store the buttons
let buttons = [initialButton];

initialButton.addEventListener("click", createNewButton);
console.log(newButton);
