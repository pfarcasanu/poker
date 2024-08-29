import React from 'react';
import SmallBlind from './SmallBlind.js';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import './index.css';

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
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/smallblind" element={<div className="container"><SmallBlind /></div>} />
      </Routes>
    </HashRouter>
}
