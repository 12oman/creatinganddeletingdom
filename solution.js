// Function to create a new button
function createNewButton() {
  // Create new button
  let newButton = document.createElement("button");

  // Randomly decide if the new button is a "Create" button or a "Delete" button
  if (Math.random() < 0.5) {
    newButton.innerHTML = "Create";
    newButton.addEventListener("click", createNewButton);
  } else {
    newButton.innerHTML = "Delete";
    newButton.addEventListener("click", function () {
      // in the "event" that the button is clicked we will remove the button from the array

      // Remove the button from the array
      buttons = buttons.filter((button) => button !== this);
      // what does the above line do?
      // it filters the buttons array and returns a new array that does not include the button that was clicked
      // the button that was clicked is "this" button
      // what would happen if we didn't have the above line?
      // the button would be removed from the DOM but it would still be in the array
      this.remove();
    });
  }

  // Add the new button to the body
  document.body.appendChild(newButton);

  // Add the new button to the array
  buttons.push(newButton);
  // console table out the buttons array
  console.table(buttons);
}

// Initial button
let initialButton = document.createElement("button");
initialButton.innerHTML = "First";
document.body.appendChild(initialButton);

// Array to store the buttons
let buttons = [initialButton];

initialButton.addEventListener("click", createNewButton);
