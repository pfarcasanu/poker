import React from 'react';
import RFIButton from './RFIButton.js';
import RFISmallBlind from './RFISmallBlind.js';
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
          <NavButton path="/smallblind">RFI Small Blind</NavButton>
          <NavButton path="/button">RFI Button</NavButton>
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<RFISmallBlind />} />
          <Route path="/smallblind" element={<RFISmallBlind />} />
          <Route path="/button" element={<RFIButton />} />
        </Routes>
      </div>
    </HashRouter>
}
