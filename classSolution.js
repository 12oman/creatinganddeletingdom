window.onload = function () {
  // Start fading out the text after a delay of 5 seconds
  setTimeout(() => {
    let myText = document.getElementById("Hi");
    myText.classList.add("fade-out");
  }, 5000);
};

class Button {
  constructor(type) {
    this.element = document.createElement("button");
    this.element.innerHTML = type;
    this.type = type;

    // Generate a random color gradient
    let gradient = "";
    for (let i = 0; i < 5; i++) {
      let hue = Math.floor(Math.random() * 360);
      let saturation = Math.floor(Math.random() * 100);
      let lightness = Math.floor(Math.random() * 100);
      let alpha = Math.random();
      gradient += `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha}) ${
        i * 20
      }%, `;
    }
    gradient = gradient.slice(0, -2); // Remove annoying trailing comma and space

    this.element.style.background = `linear-gradient(to right, ${gradient})`;

    if (type === "Create") {
      this.element.addEventListener("click", () => this.createNewButton());
      this.element.addEventListener("contextmenu", (event) =>
        this.deleteFiveButtons(event)
      );
    } else if (type === "Delete") {
      this.element.addEventListener("click", () => this.deleteButton());
      this.element.addEventListener("contextmenu", (event) =>
        this.deleteFiveButtons(event)
      );
    }

    document.body.appendChild(this.element);
    Button.buttons.push(this);
  }

  createNewButton() {
    new Button(Math.random() < 0.3 ? "Create" : "Delete");
  }

  deleteButton() {
    this.destroy();
  }

  deleteFiveButtons(event) {
    event.preventDefault();
    const numToRemove = Math.min(5, Button.buttons.length);
    for (let i = 0; i < numToRemove; i++) {
      Button.buttons[Button.buttons.length - 1].destroy();
    }
  }

  destroy() {
    let index = Button.buttons.indexOf(this);
    if (index > -1) {
      Button.buttons.splice(index, 1);
    }
    this.element.remove();
  }
}

Button.buttons = [];

// Initial button
new Button("Create");
