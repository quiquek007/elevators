import { Action } from '@ngrx/store';

const SET_ELEVATOR_WALL_COLOR = 'SET_ELEVATOR_WALL_COLOR';
const SET_ELEVATOR_WALL_OPACITY = 'SET_ELEVATOR_WALL_OPACITY';
const SET_ELEVATOR_WALL_TRANSPARENT = 'SET_ELEVATOR_WALL_TRANSPARENT';
const SET_ELEVATOR_CAPACITY = 'SET_ELEVATOR_CAPACITY';
const SET_ELEVATOR_SPEED = 'SET_ELEVATOR_SPEED';
const SET_ELEVATOR_COVERED_FLOORS = 'SET_ELEVATOR_COVERED_FLOORS';
const SET_ELEVATOR_CURRENT_FLOOR = 'SET_ELEVATOR_CURRENT_FLOOR';

const SET_WIREFRAMES_EXPAND = 'SET_WIREFRAMES_EXPAND';
const SET_WIREFRAMES_SHOWED = 'SET_WIREFRAMES_SHOWED';
const SET_WIREFRAMES_COLOR = 'SET_WIREFRAMES_COLOR';

const RESET_ELEVATOR_MANAGER_SETTINGS_ALL_SETTINGS = 'RESET_ELEVATOR_MANAGER_SETTINGS_ALL_SETTINGS';

class SetElevatorWallColor implements Action {
    type = SET_ELEVATOR_WALL_COLOR;
    constructor(public payload: string) {}
}

class SetElevatorWallOpacity implements Action {
    type = SET_ELEVATOR_WALL_OPACITY;
    constructor(public payload: number) {}
}

class SetElevatorWallTransparent implements Action {
    type = SET_ELEVATOR_WALL_TRANSPARENT;
    constructor(public payload: boolean) {}
}

class SetElevatorCapacity implements Action {
    type = SET_ELEVATOR_CAPACITY;
    constructor(public payload: number) {}
}

class SetElevatorSpeed implements Action {
    type = SET_ELEVATOR_SPEED;
    constructor(public payload: number) {}
}

class SetElevatorCoveredFloors implements Action {
    type = SET_ELEVATOR_COVERED_FLOORS;
    constructor(public payload: number) {}
}

class SetElevatorCurrentFloor implements Action {
    type = SET_ELEVATOR_CURRENT_FLOOR;
    constructor(public payload: number) {}
}

// wireframes
class SetWireframesExpand implements Action {
    type = SET_WIREFRAMES_EXPAND;
    constructor(public payload: boolean) {}
}

class SetWireframesShowed implements Action {
    type = SET_WIREFRAMES_SHOWED;
    constructor(public payload: boolean) {}
}

class SetWireframesColor implements Action {
    type = SET_WIREFRAMES_COLOR;
    constructor(public payload: THREE.Color | number | string) {}
}

class ResetAllSettings implements Action {
    type = RESET_ELEVATOR_MANAGER_SETTINGS_ALL_SETTINGS;
}

export default {
    SET_ELEVATOR_WALL_COLOR,
    SET_ELEVATOR_WALL_OPACITY,
    SET_ELEVATOR_WALL_TRANSPARENT,
    SET_ELEVATOR_CAPACITY,
    SET_ELEVATOR_SPEED,
    SET_ELEVATOR_COVERED_FLOORS,
    SET_ELEVATOR_CURRENT_FLOOR,
    SET_WIREFRAMES_EXPAND,
    SET_WIREFRAMES_SHOWED,
    SET_WIREFRAMES_COLOR,
    RESET_ELEVATOR_MANAGER_SETTINGS_ALL_SETTINGS,

    SetElevatorWallColor,
    SetElevatorWallOpacity,
    SetElevatorWallTransparent,
    SetElevatorCapacity,
    SetElevatorSpeed,
    SetElevatorCoveredFloors,
    SetElevatorCurrentFloor,
    SetWireframesExpand,
    SetWireframesShowed,
    SetWireframesColor,
    ResetAllSettings
};

