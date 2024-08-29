import React, {useState, useEffect} from 'react';
import Card from './Card.js';
import Deck from './logic/deck.js';

function Button({color, children, onClick, phase, disabled}) {
    let style = {backgroundColor: color, padding: 8, color: 'white'};
    return <button disabled={disabled} style={style} onClick={onClick}>{children}</button>;
}

function deal(deck, count) {
    let iter = Array(count).keys().map(() => deck.draw());
    return Array.from(iter);
}

export default function Headsup() {
  let [cards, setCards] = useState(deal(new Deck(), 9));
  let [money, setMoney] = useState(99);
  let [bet, setBet] = useState(1);
  let [phase, setPhase] = useState(0);
  let [folded, setFolded] = useState(false);
  let [color, setColor] = useState("white");

  useEffect(() => {
    if (!done()) { return; }
    if (folded) {
        setMoney(money - bet);
        setColor("red");
    } else {
        setMoney(money + 2 * bet);
        setColor("green");
    }
  }, [phase, folded]);

  function fold() {
    console.log(" * fold");
    if (phase === 3) {
        return;
    }
    setFolded(true);
  }

  function limp() {
    console.log(" * limp");
    if (phase === 3) {
        return;
    }
    setMoney(money - 1);
    setBet(bet + 1);
    setPhase(phase + 1);
  }

  function raise() {
    console.log(" * raise");
    if (phase === 3) {
        return;
    }
    setMoney(money - 5);
    setBet(bet + 5);
    setPhase(phase + 1);
  }

  function next() {
    if (!done()) {
        return;
    }
    setBet(1);
    setPhase(0);
    setFolded(false);
    setCards(deal(new Deck(), 9));
    setColor("white");
  }

  function done() {
    return phase === 3 || folded;
  }

  return (
    <div style={{minWidth: '24em'}}>
      <h3 className="title">Heads Up</h3>
      <div className="playingCards">
        <ul className="table">
          <li><Card {...cards[0]} /></li>
          <li><Card {...cards[1]} /></li>
          <li><Card {...cards[2]} /></li>
          {phase >= 1 ? <li><Card {...cards[3]} /></li> : null}
          {phase >= 2 ? <li><Card {...cards[4]} /></li> : null}
        </ul>
      </div>
      <div className="playingCards">
        <ul className="hand">
          <li><Card {...cards[5]} /></li>
          <li><Card {...cards[6]} /></li>
          {
            done() ? <li><Card {...cards[7]} /></li> : <li><div className="card back">*</div></li>
          }
          {
            done() ? <li><Card {...cards[8]} /></li> : <li><div className="card back">*</div></li>
          }
        </ul>
      </div>
      <ul>
        <li><Button color="gray" onClick={fold} disabled={done()}>Fold</Button></li>
        <li><Button color="green" onClick={limp} disabled={done()}>Limp</Button></li>
        <li><Button color="red" onClick={raise} disabled={done()}>Raise</Button></li>
        <li><Button color="gray" onClick={next} disabled={!done()}>Next</Button></li>
        <li style={{color: color, marginTop: "-1em", paddingLeft: '4em'}}>
            <h2>${bet} | ${money}</h2>
        </li>
      </ul>
    </div>
  );
}
