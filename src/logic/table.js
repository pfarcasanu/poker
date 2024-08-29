import { getIndexes } from './deck.js';

function bestMove(table, card1, card2) {
    let [pos1, pos2] = getIndexes([card1, card2]).sort();
    if (card1.suit === card2.suit) {
        return table[pos1][pos2];
    }
    return table[pos2][pos1];
}

export { bestMove };
