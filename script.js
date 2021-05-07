import Deck from "./deck.js"

    //select div elements where our cards will be attached
    var newCard = document.querySelector(".blank")
    var newCard1 = document.querySelector(".blank1")
    var newCard2 = document.querySelector(".blank2")
    var newCard3 = document.querySelector(".blank3")
    var newCard4 = document.querySelector(".blank4")
    var newCard5 = document.querySelector(".blank5")
    var newCard6 = document.querySelector(".blank6")
    var newCard7 = document.querySelector(".blank7")
    var newCard8 = document.querySelector(".blank8")
    var newCard9 = document.querySelector(".blank9")
       
   
    
const deck = new Deck()
//randomize deck array
deck.shuffle()


//attach cards to empty div elements
newCard.append(deck.cards[0].getHTML())
newCard1.append(deck.cards[1].getHTML())
newCard2.append(deck.cards[2].getHTML())
newCard3.append(deck.cards[3].getHTML())
newCard4.append(deck.cards[4].getHTML())
newCard5.append(deck.cards[5].getHTML())
newCard6.append(deck.cards[6].getHTML())
newCard7.append(deck.cards[7].getHTML())
newCard8.append(deck.cards[8].getHTML())
newCard9.append(deck.cards[9].getHTML())





