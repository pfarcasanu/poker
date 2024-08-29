import React, {useState} from 'react';
import Card from './card.js';
import Deck from './logic/deck.js';
import {bestMove} from './logic/sb.js';

function deal() {
  let deck = new Deck();
  let card1 = deck.draw();
  let card2 = deck.draw();
  return [card1, card2];
}

function Button({color, children, onClick}) {
  let style = {backgroundColor: color, padding: 8, color: 'white'};
  return <button style={style} onClick={onClick}>{children}</button>;
}

function StatusIndicator({children}) {
  return <li style={{paddingTop: 5, marginLeft: 5}}>{children}</li>;
}

export default function SmallBlind() {
  let [cards, setCards] = useState(deal());
  let [success, setSuccess] = useState(null);

  function redeal() {
    setCards(deal());
    setSuccess(null);
  }

  function onMove(move) {
    if (move === bestMove(cards[0], cards[1])) {
      setSuccess(true);
      setTimeout(redeal, 1000);
      return;
    }
    setSuccess(false);
  }

  return (
    <div style={{padding: 10}}>
        <div className="playingCards">
            <ul className="table">
              {/* <li><Card {...cards[0]} /></li>
              <li><Card {...cards[1]} /></li> */}
              <li><Card {...{rank: '10', suit: 'hearts'}} /></li>
              <li><Card {...{rank: '10', suit: 'spades'}} /></li>
              <li><Card {...{rank: '10', suit: 'diams'}} /></li>
              <li><Card {...{rank: '10', suit: 'clubs'}} /></li>
              <li><Card {...{rank: 'a', suit: 'hearts'}} /></li>
            </ul>
        </div>
        <ul>
          <li><Button onClick={() => onMove('f')} color="gray">Fold</Button></li>
          <li><Button onClick={() => onMove('l')} color="green">Limp</Button></li>
          <li><Button onClick={() => onMove('b')} color="blue">Bluff</Button></li>
          <li><Button onClick={() => onMove('r')} color="red">Raise</Button></li>
          {
            success === true ?
            <StatusIndicator>✅</StatusIndicator> : success === false ?
            <StatusIndicator>❌</StatusIndicator> : null
          }
        </ul>
    </div>
  );
}
