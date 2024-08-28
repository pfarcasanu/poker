let suits = ['hearts', 'diams', 'clubs', 'spades'];
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];

function shuffle(cards) {
    return cards.map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
}

export default class Deck {
    cards = [];

    constructor() {
        for (let suit of suits) {
            for (let rank of ranks) {
                this.cards.push({suit, rank});
            }
        }
        this.cards = shuffle(this.cards);
    }

    draw() {
        return this.cards.pop();
    }
}
