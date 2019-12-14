import { Action } from '@ngrx/store';

const SET_FORM_POSITION = 'SET_FORM_POSITION';
const SET_FORM_OPENED = 'SET_FORM_OPENED';

class SetFormPosition implements Action {
    type = SET_FORM_POSITION;
    constructor(public payload: string) {}
}

class SetFormOpened implements Action {
    type = SET_FORM_OPENED;
    constructor(public payload: boolean) {}
}

export default {
    SetFormPosition,
    SetFormOpened,
    SET_FORM_POSITION,
    SET_FORM_OPENED
};

