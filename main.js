//Make the DIV element draggable:


//consolidate all the elements by their classname and put them in one variable
var draggableElements = document.getElementsByClassName("draggable");


// loop through and make div elements draggable in the class variable
for(var i = 0; i < draggableElements.length; i++){
    dragElement(draggableElements[i]);
}

//the following functions implement current drag functionality

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



var CA_image = "face";
    function flip(){
        var CAsCard = document.getElementByClass("CAce");
        if(CA_image == 'face'){
        CACard.src="img/back.jpg";
        CA_image = "back";
        }
        else{
            CACard.src="img/aceofclubs.jpg";
            CA_image="face";
        }
    }