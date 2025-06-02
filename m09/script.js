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
var feedbackMessage = document.getElementById('feedbackMessage');

// function to the buttons onClick property
addItemButton.onclick = function() {
  feedbackMessage.textContent = '';
  feedbackMessage.style.color = 'red';

  let entryWasEmpty = false;

  try {
    var newItemText = addItemInput.value.trim ();
// check to see if input is empty 
    if (newItemText === "") {
      entryWasEmpty = true;
      // throw an error
      throw new Error("The entry was empty.");
    }

// if entry was not empty then continue with new item on list
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
} catch (e) {
// write the error to the console
    console.log(e);
  }
  finally {
    if(entryWasEmpty) {
      feedbackMessage.textContent = "ERROR: The entry was empty. No item was entered.";
      feedbackMessage.style.color = "red";
    }
};
