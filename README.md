<!-- Answer to question no [1] -->
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1. getElementById :

* Returns one element with the specified ID.
* Example:> document.getElementById("myDiv");
* Only works for IDs, which should be unique in the page.

2. getElementByClassName:

* Returns a live HTML collection of all elements that have the given class. 
* Example:> document.getElementByClassName("card");
* It's live, so if if elements are added/removed, the collection updates automatically.

3. querySelector / querySelectorAll

* querySelector returns the first element that matches a CSS selector.
* querySelectorAll returns a static NOdeList of all elements matching the CSS selector

* Examples:> document.querySelector(".card");
             document.querySelectorALl(".card");
* Works with any CSS selector (class,id,attribute,pseudo-class,etc), so it's more flexible.

