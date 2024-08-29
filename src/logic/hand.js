import { getIndexes, getSuits } from './deck.js';

function isFlush(hand, table) {
    let suits = [...getSuits(hand), ...getSuits(table)];
    let firstSuit = suits[0];
    return suits.filter(suit => suit === firstSuit).length === 5;
}

function isTopPair(hand, table) {
    let handIndexes = getIndexes(hand);
    let tableIndexes = getIndexes(table).sort();
    return handIndexes.includes(tableIndexes[0]);
}

export { isTopPair, isFlush };
