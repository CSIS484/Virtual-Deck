//Make the DIV element draggable:

// for (var i = 0; i < 4; i++) {

//   for (var j = 0; j < 13; j++) {

//   dragElement(document.getElementById(ranks[j]+suits[i]));
//   }
// }
dragElement(document.getElementById("CA"));
dragElement(document.getElementById("C2"));
dragElement(document.getElementById("C3"));
dragElement(document.getElementById("C4"));
dragElement(document.getElementById("C5"));
dragElement(document.getElementById("C6"));
dragElement(document.getElementById("C7"));
dragElement(document.getElementById("C8"));
dragElement(document.getElementById("C9"));
dragElement(document.getElementById("C10")); 
dragElement(document.getElementById("CJ")); 
dragElement(document.getElementById("CQ"));
dragElement(document.getElementById("CK"));
dragElement(document.getElementById("DA")); 
dragElement(document.getElementById("D2")); 
dragElement(document.getElementById("D3"));
dragElement(document.getElementById("D4")); 
dragElement(document.getElementById("D5")); 
dragElement(document.getElementById("D6"));
dragElement(document.getElementById("D7")); 
dragElement(document.getElementById("D8")); 
dragElement(document.getElementById("D9"));
dragElement(document.getElementById("D10")); 
dragElement(document.getElementById("DJ")); 
dragElement(document.getElementById("DQ"));
dragElement(document.getElementById("DK")); 
dragElement(document.getElementById("HA")); 
dragElement(document.getElementById("H2")); 
dragElement(document.getElementById("H3"));
dragElement(document.getElementById("H4")); 
dragElement(document.getElementById("H5")); 
dragElement(document.getElementById("H6"));
dragElement(document.getElementById("H7")); 
dragElement(document.getElementById("H8")); 
dragElement(document.getElementById("H9"));
dragElement(document.getElementById("H10")); 
dragElement(document.getElementById("HJ")); 
dragElement(document.getElementById("HQ"));
dragElement(document.getElementById("HK"));
dragElement(document.getElementById("SA")); 
dragElement(document.getElementById("S2")); 
dragElement(document.getElementById("S3"));
dragElement(document.getElementById("S4")); 
dragElement(document.getElementById("S5")); 
dragElement(document.getElementById("S6"));
dragElement(document.getElementById("S7")); 
dragElement(document.getElementById("S8")); 
dragElement(document.getElementById("S9"));
dragElement(document.getElementById("S10")); 
dragElement(document.getElementById("SJ")); 
dragElement(document.getElementById("SQ"));
dragElement(document.getElementById("SK")); 

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
  

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
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var CA_image = "face";
    function flip(){
        var CACard = document.getElementById("CAce");
        if(CA_image == 'face'){
        CACard.src="img/back.jpg";
        CA_image = "back";
        }
        else{
            CACard.src="img/aceofclubs.jpg";
            CA_image="face";
        }
    }