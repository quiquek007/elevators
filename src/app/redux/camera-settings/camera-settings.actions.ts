import { Action } from '@ngrx/store';

const SET_CAMERA_POSITION = 'SET_CAMERA_POSITION';
const RESET_CAMERA_POSITION = 'RESET_CAMERA_POSITION';
const SET_CONTROLS_TARGET = 'SET_CONTROLS_TARGET';
const RESET_CONTROLS_TARGET = 'RESET_CONTROLS_TARGET';

class SetCameraPostion implements Action {
    type = SET_CAMERA_POSITION;
    constructor(public payload: { x: number, y: number, z: number }) {}
}

class ResetCameraPosition implements Action {
    type = RESET_CAMERA_POSITION;
}

class SetControlsTarget implements Action {
    type = SET_CONTROLS_TARGET;
    constructor(public payload: { x: number, y: number, z: number }) {}
}

class ResetControlsTarget implements Action {
    type = RESET_CONTROLS_TARGET;
}

export default {
    SetCameraPostion,
    ResetCameraPosition,
    SetControlsTarget,
    ResetControlsTarget,

    SET_CAMERA_POSITION,
    RESET_CAMERA_POSITION,
    SET_CONTROLS_TARGET,
    RESET_CONTROLS_TARGET
};

