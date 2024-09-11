import React, {useState, useEffect} from 'react';
import { parseResult, getWinners } from './logic/hand.js';
import { bot1, Actions } from './logic/bot1.js';
import Card from './Card.js';
import Deck from './logic/deck.js';

function Button({color, children, onClick, phase, disabled}) {
    let style = {backgroundColor: color, padding: 8, color: 'white'};
    return <button disabled={disabled} style={style} onClick={onClick}>{children}</button>;
}

export default function Headsup() {
  let [cards, setCards] = useState(new Deck().deal(9));
  let [money, setMoney] = useState(100);
  let [bet, setBet] = useState(1);
  let [phase, setPhase] = useState(0);
  let [folded, setFolded] = useState(false);
  let [botFolded, setBotFolded] = useState(false);
  let [color, setColor] = useState("white");
  let [text, setText] = useState("?");

  useEffect(() => {
    if (!done()) { return; }
    let res = getResult();
    if (res === 1) {
        setMoney(money + bet);
        setColor("green");
    } else if (res === -1) {
        setMoney(money - bet);
        setColor("red");
    } else {
        setColor("white");
    }
  }, [phase, folded, botFolded]);

  function fold() {
    if (done()) {
        return;
    }
    setFolded(true);
    setText("You folded.");
  }

  function limp() {
    if (done()) {
        return;
    }
    if (botAction() < Actions.LIMP) {
        setBotFolded(true);
        setText("You limped, bot folded.");
        return;
    }
    setBet(bet + 1);
    setPhase(phase + 1);
  }

  function raise() {
    if (done()) {
        return;
    }
    if (botAction() < Actions.RAISE) {
        setBotFolded(true);
        setText("You raised, bot folded.");
        return;
    }
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
    setBotFolded(false);
    setCards(new Deck().deal(9));
    setColor("white");
    setText("?");
  }

  function botAction() {
    return bot1(botCards(), knownTable());
  }

  function botCards() {
    return cards.slice(7, 9);
  }

  function knownTable() {
    let table = [];
    if (phase >= 1) {
      table = table.concat(cards.slice(0, 3));
    }
    if (phase >= 2) {
      table.push(cards[3]);
    }
    if (phase >= 3) {
      table.push(cards[4]);
    }
    return table;
  }

  function done() {
    return phase === 4 || folded || botFolded;
  }

  function getResult() {
    if (folded) { return -1; }
    if (botFolded) { return 1; }
    let cards1 = cards.slice(5, 7);
    let cards2 = cards.slice(7, 9);
    let cards3 = cards.slice(0, 5);
    let [hand1, hand2] = parseResult([cards1, cards2], cards3);
    let [winner1, winner2] = getWinners([hand1, hand2]);
    setText(winner1.descr);
    if (winner1 && winner2) {
      return 0;
    } else if (winner1 === hand1) {
      return 1;
    } else {
      return -1;
    }
  }

  return (
    <div style={{minWidth: '23em'}}>
      <h3 className="title">Heads Up</h3>
      <div className="playingCards">
        <ul className="table">
          {phase === 0 ? <li><div className="card back">*</div></li> : null}
          {phase === 0 ? <li><div className="card back">*</div></li> : null}
          {phase === 0 ? <li><div className="card back">*</div></li> : null}
          {phase > 0 ? knownTable().map((card, i) => <li key={i}><Card {...card} /></li>) : null}
        </ul>
      </div>
      <div className="playingCards" style={{marginTop: "-0.5em"}}>
        <ul className="hand">
          <li><Card {...cards[5]} /></li>
          <li><Card {...cards[6]} /></li>
          {
            botCards().map((card, i) => phase === 4
            ? <li key={i}><Card {...card} /></li>
            : <li key={i}><div className="card back">*</div></li>
            )
          }
        </ul>
      </div>
      <h4 style={{color: done() ? "#aaa" : "black", marginTop: "-2em", textAlign: 'center'}}>
        {done() ? text : "Hand result."}
      </h4>
      <ul>
        <li><Button color="gray" onClick={fold} disabled={done()}>Fold</Button></li>
        <li><Button color="green" onClick={limp} disabled={done()}>Limp</Button></li>
        <li><Button color="red" onClick={raise} disabled={done()}>Raise</Button></li>
        <li><Button color="gray" onClick={next} disabled={!done()}>Next</Button></li>
        <li style={{color: color, marginTop: "-1em", paddingLeft: '3em'}}>
            <h2>${bet} | ${money}</h2>
        </li>
      </ul>
    </div>
  );
}
