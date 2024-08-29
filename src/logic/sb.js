import { ranks, sortedRankIndexes } from './deck.js';

const table =
[
    [ 'l', 'r', 'r', 'r', 'r', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l' ],
    [ 'l', 'l', 'r', 'r', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l' ],
    [ 'r', 'r', 'r', 'r', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l' ],
    [ 'r', 'r', 'l', 'r', 'l', 'l', 'l', 'l', 'l', 'l', 'b', 'b', 'b' ],
    [ 'r', 'l', 'l', 'l', 'r', 'l', 'l', 'l', 'l', 'b', 'b', 'f', 'f' ],
    [ 'l', 'l', 'l', 'l', 'l', 'r', 'l', 'l', 'l', 'b', 'b', 'f', 'f' ],
    [ 'l', 'l', 'l', 'l', 'l', 'l', 'r', 'l', 'l', 'b', 'b', 'f', 'f' ],
    [ 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'b', 'f', 'f' ],
    [ 'l', 'l', 'l', 'b', 'b', 'b', 'b', 'l', 'l', 'l', 'l', 'b', 'f' ],
    [ 'l', 'l', 'b', 'f', 'f', 'f', 'f', 'f', 'l', 'l', 'l', 'b', 'f' ],
    [ 'l', 'l', 'b', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'l', 'b', 'f' ],
    [ 'l', 'b', 'b', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'l', 'l' ],
    [ 'l', 'b', 'b', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'l' ],
];

function bestMove(card1, card2) {
    let [pos1, pos2] = sortedRankIndexes(card1, card2);
    if (card1.suit === card2.suit) {
        return table[pos1][pos2];
    }
    return table[pos2][pos1];
}

export {bestMove};
