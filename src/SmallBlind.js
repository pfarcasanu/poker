import React from 'react';
import Preflop from './Preflop.js';
import {bestMove} from './logic/sb.js';

export default function SmallBlind() {
  const buttons = [
    { short: 'f', long: 'fold', color: 'gray' },
    { short: 'l', long: 'limp', color: 'green' },
    { short: 'b', long: 'bluff', color: 'blue' },
    { short: 'r', long: 'raise', color: 'red' },
  ];
  return <Preflop buttons={buttons} bestMove={bestMove} />;
}
