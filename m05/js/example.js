var tableInput = prompt('Please enter a number, 0-10, for the multiplication table'); //prompt message
var table = tableInput;             // Setting table for user input
var operator = 'addition'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';              // Message

/*if (operator === 'addition') {
  // Do addition
  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
} else {
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}*/

// attempt for the table to be multiplication (didnt work)
/*if (operator === 'multiplication') {
  //do multiplication
while (i<11) {
  msg += + 'x' + table + '=' + (i * table) + '<br />';
  i++;
  }
} else {
  // do addition
while (i < 11) {
  msg += i + '+' + table + '=' + (i + table) + '<br />';
  i++;
}
}*/

// Do multiplication
while (i < 11) {
  msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
  i++;
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
