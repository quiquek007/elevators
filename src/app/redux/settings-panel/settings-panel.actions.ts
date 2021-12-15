import { Action } from '@ngrx/store';

const SET_PANEL_POSITION = 'SET_PANEL_POSITION';
const SET_PANEL_OPENED = 'SET_PANEL_OPENED';
const SET_SELECTED_TAB = 'SET_SELECTED_TAB';

class SetPanelPosition implements Action {
    type = SET_PANEL_POSITION;
    constructor(public payload: string) {}
}

class SetPanelOpened implements Action {
    type = SET_PANEL_OPENED;
    constructor(public payload: boolean) {}
}

class SetSelectedTab implements Action {
    type = SET_SELECTED_TAB;
    constructor(public payload: string) {}
}

export default {
    SetPanelPosition,
    SetPanelOpened,
    SetSelectedTab,

    SET_PANEL_POSITION,
    SET_PANEL_OPENED,
    SET_SELECTED_TAB
};

