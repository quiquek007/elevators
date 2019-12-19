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

const SET_RENDERER_EXPAND = 'SET_RENDERER_EXPAND';
const SET_RENDERER_ALPHA = 'SET_RENDERER_ALPHA';
const SET_RENDERER_ANTIALIAS = 'SET_RENDERER_ANTIALIAS';

// background settings
class SetBackgroundColor implements Action {
    type = SET_BACKGROUND_COLOR;
    constructor(public payload: string) {}
}

class ResetBackgroundColor implements Action {
    type = RESET_BACKGROUND_COLOR;
}

// grid settings
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

// renderer settings
class SetRendererExpand implements Action {
    type = SET_RENDERER_EXPAND;
    constructor(public payload: boolean) {}
}

class SetRendererAlpha implements Action {
    type = SET_RENDERER_ALPHA;
    constructor(public payload: boolean) {}
}

class SetRendererAntialias implements Action {
    type = SET_RENDERER_ANTIALIAS;
    constructor(public payload: boolean) {}
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
    SetRendererExpand,
    SetRendererAlpha,
    SetRendererAntialias,

    SET_BACKGROUND_COLOR,
    RESET_BACKGROUND_COLOR,
    SET_GRID_COLOR,
    RESET_GRID_COLOR,
    SET_GRID_SETTINGS_EXPAND,
    SET_GRID_ENABLE,
    SET_GRID_OPACITY,
    SET_GRID_SIZE,
    RESET_GRID_SIZE,
    SET_RENDERER_EXPAND,
    SET_RENDERER_ALPHA,
    SET_RENDERER_ANTIALIAS,
};