import { ranks } from './deck.js';

function sortedRankIndexes(card1, card2) {
    let pos1 = ranks.indexOf(card1.rank);
    let pos2 = ranks.indexOf(card2.rank);
    if (pos1 < pos2) {
        return [pos1, pos2];
    }
    return [pos2, pos1];
}

function bestMove(table, card1, card2) {
    let [pos1, pos2] = sortedRankIndexes(card1, card2);
    if (card1.suit === card2.suit) {
        return table[pos1][pos2];
    }
    return table[pos2][pos1];
}

export { bestMove };
