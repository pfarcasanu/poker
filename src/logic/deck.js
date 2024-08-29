let suits = ['hearts', 'diams', 'clubs', 'spades'];

let ranks = ['a', 'k', 'q', 'j', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

function sortedRankIndexes(card1, card2) {
    let pos1 = ranks.indexOf(card1.rank);
    let pos2 = ranks.indexOf(card2.rank);
    if (pos1 < pos2) {
        return [pos1, pos2];
    }
    return [pos2, pos1];
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
}

export {ranks, sortedRankIndexes};
