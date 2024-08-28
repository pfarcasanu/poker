import React from 'react';
import './cards.css';

function Suit({suit}) {
  let suits= {
    hearts: <span className="suit">&hearts;</span>,
    diams: <span className="suit">&diams;</span>,
    spades: <span className="suit">&spades;</span>,
    clubs: <span className="suit">&clubs;</span>,
  }
  return suits[suit];
}

export default function Card({suit, rank}) {
  let className = `card rank-${rank} ${suit}`;
  let rankName = rank.toUpperCase();
  return (
    <>
        <div className={className}>
          <span className="rank">{rankName}</span>
          <span className="suit">{Suit(suit)}</span>
        </div>
    </>
  );
}
