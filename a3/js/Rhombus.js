//    Example of what user output should be:
//var rHeight = 5;
//var colorEven = "orange";
//var colorOdd = "Black";
//var symbol = "*";


// Create differnt parts of the Rhombus
function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol)
{
  upRight(pHeight, pColorEven, pColorOdd, pSymbol);
  downRight(pHeight, pColorEven, pColorOdd, pSymbol);
  upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
}

// Top right part of the Rhombus
function upRight(pHeight, pColorEven, pColorOdd, pSymbol)
{
  var rLine = "";
  for (i=0; i<pHeight; i++){
    rLine += "<p>";

// Create each line on the Rhombus
    for (j=0; j<=i; j++)
      {

// Is the position EVEN or ODD so we can change the color
        if (j%2)
  // EVEN
          rLine += "<span style = 'color:" + pColorEven + ";'>" + pSymbol +" </span>";
        else
  // ODD
          rLine += "<span style = 'color:" + pColorOdd + ";'>" + pSymbol +" </span>";
      }
    rLine += "</p>";
    
// console.log(rLine);
  }
  document.getElementById("upRight").innerHTML = rLine;
}


//Bottom right part of the Rhombus
function downRight(pHeight, pColorEven, pColorOdd, pSymbol) 
{
  var rLine ="";
  for (i=pHeight; i > 0 ; i--) {
    rLine += "<p>";

// Create each line on the Rhombus
    for (j=0; j<i; j++) {

// Is the positon EVEN or ODD so we change the color
      if (j%2)
// EVEN
        rLine += "<span style = 'color:" + pColorEven + ";'>" + pSymbol +" </span>";
      else
// ODD
        rLine += "<span style = 'color:" + pColorOdd + ";'>" + pSymbol +" </span>";
    }
    rLine+="</p>";
// console.log(rLine);
  }
  document.getElementById("downRight").innerHTML = rLine;
}

// Upper left portion of the Rhombus
function upLeft(pHeight, pColorEven, pColorOdd, pSymbol)
{
  var rLine ="";
  for (i=pHeight; i > 0 ; i--) {
    rLine += "<p>";

//Create each line of the Rhombus
    for (j=0; j<i; j++) {

// Is the position EVEN or ODD so we change the color
      if (j%2)
// EVEN
        rLine += "<span style = 'color:" + pColorEven + ";'>" + pSymbol +" </span>";
      else
//ODD
        rLine += "<span styele = 'color:" + pColorOdd + ";'>" + pSymbol +" </span>";
    }
    rLine+="<p>";
//console.log(rLine);
  }
  document.getElementById("upLeft").innerHTML = rLine;
}

// Bottom left prortion of Rhombus
function downLeft(pHeight, pColorEven, pColorOdd, pSymbol)
{
  var rLine = "";
  for (i=pHeight; i>0 ; i--) {
    rLine += "<p>";

//Create each line of Rhombus
    for (j=0; j<i; j++) {

// Is the position EVEN or ODD so we change the color
      if (j%2)
//EVEN
        rLine += "<span style = 'color:" + pColorEven + ";'>" + pSymbol +" </span>";
      else
// ODD
        rLine += "<span style = 'color:" + pColorOdd + ";'>" + pSymbol +" </span>";
    }
    rLine += "<p>";
//console.log(rLine);
  }
  document.getElementById("downLeft").innerHTML = rLine;
}


