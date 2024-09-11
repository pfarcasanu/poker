import Deck from './deck.js';
import { parseResult, getWinners, symbolify } from './hand.js';

const Actions = Object.freeze({
    FOLD: 0,
    LIMP: 1,
    RAISE: 2
});

const kIterations = 100;

function bot1(hand, knownTable) {
    let knownCards = [...hand, ...knownTable];
    let won = 0;

    for(let i = 0; i < kIterations; i++) {
        let deck = (new Deck()).remove(knownCards);
        let possibleOpponent = deck.deal(2);
        let table = [...deck.deal(5 - knownTable.length), ...knownTable];
        let result = parseResult([hand, possibleOpponent], table);
        let winners = getWinners(result);
        if (winners[0] === result[0]) {
            won++;
        }
    }


    let winrate = won / kIterations;
    console.log(symbolify(hand), winrate);
    if (winrate >= 0.50) {
        return Actions.RAISE;
    } else if (winrate >= 0.25) {
        return Actions.LIMP;
    } else {
        return Actions.FOLD;
    }
}

export { bot1, Actions };
