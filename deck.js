const SUITS = ["♠", "♣", "♥", "♦"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

export default class Deck{
    constructor(cards = createDeck()){
        this.cards = cards
    }



    get numberOfCards() {
    return this.cards.length
    }   
    
    //shuffle algorithm for card objects
    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--){
            const newIndex = Math.floor(Math.random() * (i+1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }

    //function decides what color our card should be during rendering
    get color() {
        
        return this.suit === '♣' || this.suit === '♠' ? 'black' : 'red'

    }

    //function handles dynamic creation of cards
    getHTML() {
        const cardElement = document.createElement('div')
        cardElement.innerText = this.value + this.suit
        cardElement.classList.add("card", this.color)
        cardElement.dataset.value = `${this.value} ${this.suit}`
        return cardElement
    }
}

//puts cards into array based on suit and value
function createDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}

