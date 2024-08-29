import { isFlush, isTopPair } from './hand.js';

// Hands
const _AsQh = [{rank: 'a', suit: 's'}, {rank: 'q', suit: 'h'}];
const _KdKh = [{rank: 'k', suit: 'd'}, {rank: 'k', suit: 'h'}];
const _AhJh = [{rank: 'a', suit: 'h'}, {rank: 'j', suit: 'h'}];

// Flops
const _Qd9h2s = [{rank: 'q', suit: 'd'}, {rank: '9', suit: 'h'}, {rank: '2', suit: 's'}];
const _10h9h2h = [{rank: '10', suit: 'h'}, {rank: '9', suit: 'h'}, {rank: '2', suit: 'h'}];

test('is flush', () => {
  expect(isFlush(_AsQh, _10h9h2h)).toBe(false);
  expect(isFlush(_AhJh, _10h9h2h)).toBe(true);
});

test('is top pair', () => {
  expect(isTopPair(_AsQh, _Qd9h2s)).toBe(true);
  expect(isTopPair(_KdKh, _Qd9h2s)).toBe(false);
});
