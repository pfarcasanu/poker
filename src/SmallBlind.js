import React from 'react';
import Preflop from './Preflop.js';

const table =
[
    [ 'l', 'r', 'r', 'r', 'r', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l' ],
    [ 'l', 'l', 'r', 'r', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l' ],
    [ 'r', 'r', 'r', 'r', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l' ],
    [ 'r', 'r', 'l', 'r', 'l', 'l', 'l', 'l', 'l', 'l', 'b', 'b', 'b' ],
    [ 'r', 'l', 'l', 'l', 'r', 'l', 'l', 'l', 'l', 'b', 'b', 'f', 'f' ],
    [ 'l', 'l', 'l', 'l', 'l', 'r', 'l', 'l', 'l', 'b', 'b', 'f', 'f' ],
    [ 'l', 'l', 'l', 'l', 'l', 'l', 'r', 'l', 'l', 'b', 'b', 'f', 'f' ],
    [ 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'l', 'b', 'f', 'f' ],
    [ 'l', 'l', 'l', 'b', 'b', 'b', 'b', 'l', 'l', 'l', 'l', 'b', 'f' ],
    [ 'l', 'l', 'b', 'f', 'f', 'f', 'f', 'f', 'l', 'l', 'l', 'b', 'f' ],
    [ 'l', 'l', 'b', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'l', 'b', 'f' ],
    [ 'l', 'b', 'b', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'l', 'l' ],
    [ 'l', 'b', 'b', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'l' ],
];

const buttons = [
  { short: 'f', long: 'fold', color: 'gray' },
  { short: 'l', long: 'limp', color: 'green' },
  { short: 'b', long: 'bluff', color: 'blue' },
  { short: 'r', long: 'raise', color: 'red' },
];

export default function SmallBlind() {
  return <Preflop table={table} buttons={buttons} />;
}
