import { Action } from '@ngrx/store';

const SET_POSITION = 'SET_POSITION';
const SET_FORM_OPENED = 'SET_FORM_OPENED';

class SetPosition implements Action {
    type = SET_POSITION;
    constructor(public payload: string) {}
}

class SetFormOpened implements Action {
    type = SET_FORM_OPENED;
    constructor(public payload: boolean) {}
}

export default {
    SetPosition,
    SetFormOpened,
    SET_POSITION,
    SET_FORM_OPENED
};

