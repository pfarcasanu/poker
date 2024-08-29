import { getIndexes } from './deck.js';

const HAND_92Q = [{rank: 'q', suit: 'd'}, {rank: '9', suit: 'h'}, {rank: '2', suit: 's'}];

test('sorted indexes', () =>  {
    expect(getIndexes(HAND_92Q)).toEqual(Int8Array.from([2, 5, 12]));
});
