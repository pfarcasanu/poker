import { ranks, sortedRankIndexes } from './deck.js';

const table =
[
    [ 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r' ],
    [ 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r' ],
    [ 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r' ],
    [ 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'f', 'f', 'f', 'f' ],
    [ 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'f', 'f', 'f', 'f' ],
    [ 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'f', 'f', 'f', 'f' ],
    [ 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'f', 'f', 'f' ],
    [ 'r', 'r', 'f', 'f', 'f', 'r', 'r', 'r', 'r', 'r', 'r', 'f', 'f' ],
    [ 'r', 'f', 'f', 'f', 'f', 'f', 'f', 'r', 'r', 'r', 'r', 'f', 'f' ],
    [ 'r', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'r', 'r', 'r', 'f' ],
    [ 'r', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'r', 'r', 'f' ],
    [ 'r', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'r', 'r' ],
    [ 'r', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'r' ],
];

function bestMove(card1, card2) {
    let [pos1, pos2] = sortedRankIndexes(card1, card2);
    if (card1.suit === card2.suit) {
        return table[pos1][pos2];
    }
    return table[pos2][pos1];
}

export {bestMove};
