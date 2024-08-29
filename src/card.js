import React from 'react';
import './cards.css';

function Suit(suit) {
  if (suit === 'hearts') {
    return <span className="suit">&hearts;</span>;
  } else if (suit === 'diams') {
    return <span className="suit">&diams;</span>;
  } else if (suit === 'spades') {
    return <span className="suit">&spades;</span>;
  } else  {
    return <span className="suit">&clubs;</span>;
  }
}

export default function Card({suit, rank}) {
  let className = `card rank-${rank} ${suit}`;
  let rankName = rank.toUpperCase();
  return (
    <div className={className}>
      <span className="rank">{rankName}</span>
      {Suit(suit)}
    </div>
  );
}
