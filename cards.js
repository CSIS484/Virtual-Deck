var suits = ['H', 'C', 'D', 'S'];
var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
var deck = [];

for (var i = 0; i < 4; i++) {

    for (var j = 0; j < 13; j++) {
        
        deck.push(ranks[j] + suits[i]);
        //this is a test change
    }
}


console.log(deck);



