let suits = ['hearts', 'diams', 'clubs', 'spades'];

let ranks = ['a', 'k', 'q', 'j', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

function getIndexes(cards) {
    let indexes = cards.map(card => ranks.indexOf(card.rank));
    return Int8Array.from(indexes);
}

function getSuits(cards) {
    return cards.map(card => card.suit);
}

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

    deal(count) {
        return Array.from(Array(count).keys().map(() => this.draw()));
    }
}

export { getIndexes, getSuits };
