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

function won(hand, opp, table) {
  const hand1 = Hand.solve(symbolify([...hand, ...table]));
  const hand2 = Hand.solve(symbolify([...opp, ...table]));
  return Hand.winners([hand1, hand2])[0] == hand1;
}

export { symbolify, won };
