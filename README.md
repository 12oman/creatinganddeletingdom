# creating and deleting dom elements
Kia ora, this is a helper repo for learning about creating and updating  [DOM](#What-is-the-DOM)
 elements. Our aim is to give you a practicum of creating and deleting DOM elements. We will be using the [document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) and [document.removeChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) methods.

## Getting started
1. Clone this repo
2. Already Done. You don't need to install anything because we are only working on the client side today. that means that we are only working with HTML, CSS and JS.

## What is the DOM?
The DOM is your HTML as a Tree. The root of the tree is the `document` object. The document object has a property called `documentElement` which is the root of the tree. The document element has a property called `children` which is an array of all the elements inside the document element. Each element has a property called `children` which is an array of all the elements inside that element. And so on.

The concept of the DOM is not just used in html, but is also used in XML, SVG and other markup languages. You can think of html as a specific implementation of the DOM.


## elements and nodes
In the DOM, elements are called nodes. There are different types of nodes. The most common ones are:
- element nodes
- text nodes
- comment nodes
- document nodes

## Creating elements
We can create elements using the `document.createElement` method. This method takes a string as an argument. The string is the name of the element you want to create. For example, if you want to create a div element, you would write `document.createElement('div')`. This will return a div element. You can then assign this element to a variable. For example, `const div = document.createElement('div')`.

### please add a div element to the body of the document
1. create a div element
2. give it a property which you will recognise it by, how about a colour?

```js
const div = document.createElement('div')
div.style.backgroundColor = 'red'
```

3. append it to the body of the document
    
    ```js
    document.body.appendChild(div)
    ```
4. check that it is there by inspecting the page in the browser

Did that work as expected? If not, why not? What do you think you need to do to make it work?


## Deleting elements

Every element has a method called `remove`. This method removes the element from the DOM. It's like a self-destruct button.
For example, if you have a div element assigned to a variable called `weorijk`, you can remove it from the DOM by calling `weorijk.remove()`. Easy as that.

### please remove the div element from the body of the document

1. get the div element from the body of the document
2. remove it from the body of the document
3. check that it is gone by inspecting the page in the browser
4. some people like to check this by logging the document.body.children to the console. Try it out.

## Exercise

The main task is to create a button which will either create a "create" button or a "delete" button. The "create" button will create a "delete" button and the "delete" button will delete the "create" button.

In order to achieve this you will need to understand creating and removing elements from the DOM, and you will also need to understand [event-listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

We have two files `solution.js` and `button.js`. Feel free to toggle the files in the `index.html` file to see the different solutions, but try not to just copy the solution. Try to understand what is happening and then write your own code. 

## Stretch goals for speedsters

### Can you 
1. Add a unique ID to each button: Each time a new button is created, give it a unique ID. This could be a simple counter that increments each time a button is created.

2. Change Button Colors: Create a function that changes the color of the button. The "Create" buttons could be one color, and the "Delete" buttons could be another.

3. Confirm Before Deleting: Modify the delete event listener so that it asks the user for confirmation (using confirm()) before the button is actually removed.

4. Display Count of Buttons: Display a count on the page of how many buttons currently exist. This count should update whenever a button is created or deleted.


