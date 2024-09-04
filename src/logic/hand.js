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

function result(hand, opp, table) {
  const hand1 = Hand.solve(symbolify([...hand, ...table]));
  const hand2 = Hand.solve(symbolify([...opp, ...table]));
  const winners = Hand.winners([hand1, hand2]);
  if (winners.length === 2) {
    return 0;
  }
  return winners[0] === hand1 ? 1 : -1;
}

export { symbolify, result };
