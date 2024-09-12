const Actions = Object.freeze({
    Fold: 0,
    Limp: 1,
    Raise: 2
});

const Phase = Object.freeze({
    Preflop: 0,
    Flop: 1,
    Turn: 2,
    River: 3,
    Showdown: 4,
});

export { Actions, Phase };
