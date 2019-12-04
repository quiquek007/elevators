import { Action } from '@ngrx/store';

export const SET_COLOR = 'SET_COLOR';
export const RESET_COLOR = 'RESET_COLOR';

export class SetColor implements Action {
    type = SET_COLOR;
    constructor(public payload: string) {}
}

export class ResetColor implements Action {
    type = RESET_COLOR;
}
