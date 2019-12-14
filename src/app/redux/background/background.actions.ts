import { Action } from '@ngrx/store';

const SET_BACKGROUND_COLOR = 'SET_BACKGROUND_COLOR';
const RESET_BACKGROUND_COLOR = 'RESET_BACKGROUND_COLOR';
const SET_GRID_COLOR = 'SET_GRID_COLOR';
const RESET_GRID_COLOR = 'RESET_GRID_COLOR';

class SetBackgroundColor implements Action {
    type = SET_BACKGROUND_COLOR;
    constructor(public payload: string) {}
}

class ResetBackgroundColor implements Action {
    type = RESET_BACKGROUND_COLOR;
}

class SetGridColor implements Action {
    type = SET_GRID_COLOR;
    constructor(public payload: string) {}
}

class ResetGridColor implements Action {
    type = RESET_GRID_COLOR;
}

export default {
    SetBackgroundColor,
    ResetBackgroundColor,
    SetGridColor,
    ResetGridColor,
    SET_BACKGROUND_COLOR,
    RESET_BACKGROUND_COLOR,
    SET_GRID_COLOR,
    RESET_GRID_COLOR
};