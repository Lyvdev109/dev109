// Create a new element and store it in a variable.
var newEl = document.createElement('li');

// Create a text node and store it in a variable.
var newText = document.createTextNode('quinoa');

// Attach the new text node to the new element.
newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position.
position.appendChild(newEl);

// adding button
var addItemInput = document.getElementById('newItem');
var addItemButton = document.getElementById('addItemButton');
var groceryList = document.getElementById('todo')

// function to the buttons onClick property
addItemButton.onclick = function() {
  var newItemText = addItemInput.value.trim ();

// check to see if input is empty
  if (newItemText !== "") {
// create new list item
    var newListItem = document.createElement('li');

// create a text node with the user input
  var newListItemText = document.createTextNode(newItemText);

// append the text to a new line
  newListItem.appendChild(newListItemText);

// append the new list to existing unordered list
  groceryList.appendChild(newListItem);

// clear input after adding item
  addItem.value = '';
  addItemInput.focus();
}
else {
  alert("please enter an item to add to the list.");
}
};
