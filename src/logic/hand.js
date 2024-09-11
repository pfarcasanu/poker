var Hand = require('./pokersolver.js').Hand;

function symbolify(cards) {
    return cards.map((card) => {
        let rank = card.rank.toUpperCase();
        if (card.rank === '10') {
          rank = 'T';
        }
        return rank + card.suit[0];
      });
}

function parseResult(hands, table) {
  return hands.map(hand => [...hand, ...table])
              .map(hand => symbolify(hand))
              .map(hand => Hand.solve(hand));
}

function getWinners(parsedHands) {
  return Hand.winners(parsedHands);
}

export { symbolify, parseResult, getWinners };
