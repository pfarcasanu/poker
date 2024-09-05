import React from 'react';
import Button from './preflop/Button.js';
import SmallBlind from './preflop/SmallBlind.js';
import Headsup from './Headsup.js';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import './styles/index.css';

function NavButton({path, children}) {
  return <li><Link to={path}>
      <button style={{fontSize: '1.2em'}}>{children}</button>
    </Link></li>;
}

export default function App() {
  return <HashRouter>
      <nav>
        <ul>
          <NavButton path="/smallblind">Small Blind</NavButton>
          <NavButton path="/button">Button</NavButton>
          <NavButton path="/headsup">Heads Up</NavButton>
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Headsup />} />
          <Route path="/smallblind" element={<SmallBlind />} />
          <Route path="/button" element={<Button />} />
          <Route path="/headsup" element={<Headsup />} />
        </Routes>
      </div>
    </HashRouter>
}
