import { ScoreReducerAction } from "../model/ScoreReducer";

export const scoreReducer = (state: number, action: ScoreReducerAction) => {
    switch (action) {
        case 'INCREMENT_SCORE': return state + 5;
        case 'RESET_SCORE': return 0;
    }

    return state;
};