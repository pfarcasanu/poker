import React from 'react';
import Button from './Button.js';
import SmallBlind from './SmallBlind.js';
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
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<SmallBlind />} />
          <Route path="/smallblind" element={<SmallBlind />} />
          <Route path="/button" element={<Button />} />
        </Routes>
      </div>
    </HashRouter>
}
