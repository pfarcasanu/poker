import React, {useState} from 'react';
import Card from './card.js';
import Deck from './deck.js';
import './index.css';

function Button({color, children}) {
  return <button style={{backgroundColor: color, padding: 8, color: 'white'}}>
    {children}</button>;
}

export default function App() {
  let deck = new Deck();
  let [correct, setState] = useState(null);

  return (
    <div style={{padding: 10}}>
        <div className="playingCards">
            <ul className="hand">
                <li><Card {...deck.draw()}/></li>
                <li><Card {...deck.draw()}/></li>
            </ul>
        </div>
        <ul>
          <li><Button color="gray">Fold</Button></li>
          <li><Button color="blue">Call</Button></li>
          <li><Button color="green">Raise</Button></li>
          {
            correct === true ?
            <li>✅</li> : correct === false ?
            <li>❌</li> : null
          }
        </ul>
    </div>
  );
}
