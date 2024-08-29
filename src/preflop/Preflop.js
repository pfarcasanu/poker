import React, {useState} from 'react';
import Card from '../Card.js';
import Deck from '../logic/deck.js';
import { bestMove } from '../logic/table.js';

function Button({color, children, onClick}) {
  let style = {backgroundColor: color, padding: 8, color: 'white'};
  return <button style={style} onClick={onClick}>{children}</button>;
}

function StatusIndicator({children}) {
  return <li style={{paddingTop: 5, marginLeft: 5}}>{children}</li>;
}

export default function Preflop({text, table, buttons}) {
  let [cards, setCards] = useState(new Deck().deal(2));
  let [success, setSuccess] = useState(null);

  function redeal() {
    setCards(new Deck().deal(2));
    setSuccess(null);
  }

  function onMove(move) {
    if (move === bestMove(table, cards[0], cards[1])) {
      setSuccess(true);
      setTimeout(redeal, 1000);
      return;
    }
    setSuccess(false);
  }

  return (
    <div style={{minWidth: '15em'}}>
      <h3 className="title">{text}</h3>
      <div className="playingCards">
        <ul className="hand">
          <li><Card {...cards[0]} /></li>
          <li><Card {...cards[1]} /></li>
        </ul>
      </div>
      <ul>
        {buttons.map((button, i) =>
        <li><Button key={`smallblind-button-${i}`}
                    onClick={() => onMove(button.short)}
                    color={button.color}>
            {button.long}
        </Button></li>)}
        {
          success === true ?
          <StatusIndicator>✅</StatusIndicator> : success === false ?
          <StatusIndicator>❌</StatusIndicator> :
          <StatusIndicator>﹖</StatusIndicator>
        }
      </ul>
    </div>
  );
}
