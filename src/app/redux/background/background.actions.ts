import { Action } from '@ngrx/store';

const SET_COLOR = 'SET_COLOR';
const RESET_COLOR = 'RESET_COLOR';

class SetColor implements Action {
    type = SET_COLOR;
    constructor(public payload: string) {}
}

class ResetColor implements Action {
    type = RESET_COLOR;
}

export default {
    SetColor,
    ResetColor,
    SET_COLOR,
    RESET_COLOR
};