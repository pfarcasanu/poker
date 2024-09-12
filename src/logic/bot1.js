import Deck from './deck.js';
import { parseResult, getWinners, symbolify } from './hand.js';
import { Actions } from './texasholdem.js';

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
    console.log("Bot1()")
    console.log(" * ", symbolify(hand), winrate);
    if (winrate >= 0.51) {
        console.log("* ", Actions.Raise);
        return Actions.Raise;
    } else if (winrate >= 0.3) {
        console.log("LIMP");
        return Actions.Limp;
    }
    console.log("FOLD");
    return Actions.Fold;
}

export { bot1, Actions };
