import React from 'react';
import Preflop from './Preflop.js';

const table =
[
    [ 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r' ],
    [ 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r' ],
    [ 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r' ],
    [ 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'f', 'f', 'f', 'f' ],
    [ 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'f', 'f', 'f', 'f' ],
    [ 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'f', 'f', 'f', 'f' ],
    [ 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'f', 'f', 'f' ],
    [ 'r', 'r', 'f', 'f', 'f', 'r', 'r', 'r', 'r', 'r', 'r', 'f', 'f' ],
    [ 'r', 'f', 'f', 'f', 'f', 'f', 'f', 'r', 'r', 'r', 'r', 'f', 'f' ],
    [ 'r', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'r', 'r', 'r', 'f' ],
    [ 'r', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'r', 'r', 'f' ],
    [ 'r', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'r', 'r' ],
    [ 'r', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'r' ],
];

const buttons = [
  { short: 'f', long: 'fold', color: 'gray' },
  { short: 'r', long: 'raise', color: 'red' },
];

export default function SmallBlind() {
  return <Preflop table={table} buttons={buttons} />;
}
