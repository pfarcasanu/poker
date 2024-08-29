import React from 'react';
import SmallBlind from './SmallBlind.js';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import './index.css';

export default function App() {
  return <HashRouter>
      <nav>
        <ul>
          <li><Link to="/sb"><button>Small Blind</button></Link></li>
          <li><Link to="/button"><button>Button</button></Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/sb" element={<SmallBlind />} />
      </Routes>
    </HashRouter>
}
