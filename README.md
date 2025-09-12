<!-- Answer to the question no [1] -->

What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1. getElementById :

- Returns one element with the specified ID.
- Example:> document.getElementById("myDiv");
- Only works for IDs, which should be unique in the page.

2. getElementByClassName:

- Returns a live HTML collection of all elements that have the given class.
- Example:> document.getElementByClassName("card");
- It's live, so if if elements are added/removed, the collection updates automatically.

3. querySelector / querySelectorAll

- querySelector returns the first element that matches a CSS selector.
- querySelectorAll returns a static NOdeList of all elements matching the CSS selector

- Examples:> document.querySelector(".card");
  document.querySelectorALl(".card");
- Works with any CSS selector (class,id,attribute,pseudo-class,etc), so it's more flexible.

<!-- Answer to the question no [2] -->

How do you create and insert a new element into the DOM?

- Firstly i create an element using document.createElement("div");
- Then i can set properties like text attributes.
- finally, i append it to a parent element using appendChild or insertBefore.
- Example:>
  const newDiv = document.createElement("div");

            newDiv.innerText = "hello world!";
            newDiv.className = "myDiv";

            const container = document.getElementById("container");
            container.appendChild(newDiv);

<!-- Answer to the question no [3] -->

What is Event Bubbling and how does it work?

- Event Bubbling is when an event triggered on an element "bubbles up" to it's parent element.
- If i click a button inside a div, the click first happens on the button, then the div, then its parent, and so on until it reaches the top (usually document).

<!-- Answer to the question no [4] -->
What is Event Delegation in JavaScript? Why is it useful?

* Event Delegation is when you attach a single event listener to a parent element instead of adding listener to multiple child elements.
* Then, inside the event handler,you check which child triggered the event using event.target.
* Why it's useful:> *Saves memory (fewer listener)
                    *Works for dynamically added elements.
*Example:> 
          document.getElementById("list").addEventListener("click", function (e) {
            if (e.target.tagName === "LI") {
              console.log("Clicked on list item:", e.target.innerText);
            }
          });
                    
