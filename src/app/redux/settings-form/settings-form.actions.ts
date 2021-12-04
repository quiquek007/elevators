import { Action } from '@ngrx/store';

const SET_FORM_POSITION = 'SET_FORM_POSITION';
const SET_FORM_OPENED = 'SET_FORM_OPENED';
const SET_SELECTED_TAB = 'SET_SELECTED_TAB';

class SetFormPosition implements Action {
    type = SET_FORM_POSITION;
    constructor(public payload: string) {}
}

class SetFormOpened implements Action {
    type = SET_FORM_OPENED;
    constructor(public payload: boolean) {}
}

class SetSelectedTab implements Action {
    type = SET_SELECTED_TAB;
    constructor(public payload: string) {}
}

export default {
    SetFormPosition,
    SetFormOpened,
    SetSelectedTab,
    SET_FORM_POSITION,
    SET_FORM_OPENED,
    SET_SELECTED_TAB
};

