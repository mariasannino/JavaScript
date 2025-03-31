/* FIRST PART */

/* const h1 = document.getElementById("main-title");
h1.textContent = "Some new title!";
h1.style.color = "white";
h1.style.backgroundColor = "black";

const li = document.querySelector("li:last-of-type");
li.textContent = li.textContent + "(changed!)";

const body = document.body;
 body.querySelector; 

 const listItemElements = document.querySelectorAll("li"); 

const listItemElements = document.getElementsByTagName("li");
for (const listItemEL of listItemElements) {
  console.dir(listItemEL);
} */

/* SECOND PART: PARENT CHILD SIBLINGS */
const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;
console.log(firstLi);

const section = document.querySelector("section ");
const button = document.querySelector("button");
/* section.style.backgroundColor = "blue"; */
section.className = "red-bg";
button.addEventListener("click", () => {
  /*   if (section.className === "red-bg visible") {
    section.className = "red-bg invisible";
  } else {
    section.className = "red-bg visible";
  } */

  /*   section.classList.toggle("visible"); */
  section.classList.toggle("invisible");
});

/* add remove object with:
- appendChild(): method of the Node interface adds a node to the end of the list of children of a specified parent node.
- insertAdjacentElement(): method of the Element interface inserts a given element node at a given position relative to the element it is invoked upon.
- replaceChild()
- removeChild()
- append()
- prepend():  before the first child 
- before():  inserts a set of Node objects or strings in the children list of this Element's parent, just before this Element.
- after():  inserts a set of Node objects or strings in the children list of the Element's parent, just after the Element
- replaceWith()
- remove()
- insertBefore(): inserts a node before a reference node as a child of a specified parent node. 
someElement.innerHTML = '' => Clears all HTML content of someElement and hence removes any objects rendered in there.

someElement.remove() => Removes a single element
someElement.parentNode.removeChild(someElement) =>  Removes the provided child element (NOT the element on which you call it)
someElement.textContent = 'Hi there!';
This creates and inserts the text node with a content of 'Hi there!'.
Want to append to existing text?

Just use:

someElement.textContent = someElement.textContent + 'More text!';/

/* Creating & Inserting DOM Objects Manually:

const someParagraph = document.createElement('p'); // creates a "p" element (i.e. a <p> element)
const root = document.getElementById('root-el'); // selects something like <div id="root-el">
root.append(someParagraph);
In this example, we create a paragraph and append it to root - append means that it's inserted at the end of root (i.e. inside of it but AFTER all other child nodes it holds). */
