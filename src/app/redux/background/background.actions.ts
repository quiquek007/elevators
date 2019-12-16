import { Action } from '@ngrx/store';
import { GridSizeModel } from 'src/app/shared/grid-size.model';

const SET_BACKGROUND_COLOR = 'SET_BACKGROUND_COLOR';
const RESET_BACKGROUND_COLOR = 'RESET_BACKGROUND_COLOR';
const SET_GRID_COLOR = 'SET_GRID_COLOR';
const RESET_GRID_COLOR = 'RESET_GRID_COLOR';
const SET_GRID_SETTINGS_EXPAND = 'SET_GRID_SETTINGS_EXPAND';
const SET_GRID_ENABLE = 'SET_GRID_ENABLE';
const SET_GRID_OPACITY = 'SET_GRID_OPACITY';
const SET_GRID_SIZE = 'SET_GRID_SIZE';
const RESET_GRID_SIZE = 'RESET_GRID_SIZE';

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

class SetGridSettingsExpand implements Action {
    type = SET_GRID_SETTINGS_EXPAND;
    constructor(public payload: boolean) {}
}

class SetGridEnable implements Action {
    type = SET_GRID_ENABLE;
    constructor(public payload: boolean) {}
}

class SetGridOpacity implements Action {
    type = SET_GRID_OPACITY;
    constructor(public payload: number) {}
}

class SetGridSize implements Action {
    type = SET_GRID_SIZE;
    constructor(public payload: GridSizeModel) {}
}

class ResetGridSize implements Action {
    type = RESET_GRID_SIZE;
}

export default {
    SetBackgroundColor,
    ResetBackgroundColor,
    SetGridColor,
    ResetGridColor,
    SetGridSettingsExpand,
    SetGridEnable,
    SetGridOpacity,
    SetGridSize,
    ResetGridSize,

    SET_BACKGROUND_COLOR,
    RESET_BACKGROUND_COLOR,
    SET_GRID_COLOR,
    RESET_GRID_COLOR,
    SET_GRID_SETTINGS_EXPAND,
    SET_GRID_ENABLE,
    SET_GRID_OPACITY,
    SET_GRID_SIZE,
    RESET_GRID_SIZE
};