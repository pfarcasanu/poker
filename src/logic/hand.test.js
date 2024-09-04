import { symbolify, result } from './hand.js';

const _AsQh = [{rank: 'a', suit: 's'}, {rank: 'q', suit: 'h'}];
const _KdKh = [{rank: 'k', suit: 'd'}, {rank: 'k', suit: 'h'}];
const _AhJh = [{rank: 'a', suit: 'h'}, {rank: 'j', suit: 'h'}];
const _Qd9h2s = [{rank: 'q', suit: 'd'}, {rank: '9', suit: 'h'}, {rank: '2', suit: 's'}];
const _10h9h2h = [{rank: '10', suit: 'h'}, {rank: '9', suit: 'h'}, {rank: '2', suit: 'h'}];

test('symbolify', () => {
  expect(symbolify(_AsQh)).toEqual(['As', 'Qh']);
  expect(symbolify(_KdKh)).toEqual(['Kd', 'Kh']);
  expect(symbolify(_Qd9h2s)).toEqual(['Qd', '9h', '2s']);
});

test('won', () => {
  expect(result(_AhJh, _KdKh, _Qd9h2s)).toBe(-1);
  expect(result(_AhJh, _KdKh, _10h9h2h)).toBe(1);
  expect(result(_AhJh, _AhJh, _10h9h2h)).toBe(0);
});
