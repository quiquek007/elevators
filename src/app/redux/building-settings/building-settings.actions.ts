import { Action } from '@ngrx/store';
import Elevator from 'app/shared/classes/elevator.class';

const SET_ELEVATORS = 'SET_ELEVATORS';
const CREATE_NEW_ELEVATOR = 'CREATE_NEW_ELEVATOR';
const SET_DEFAULT_ELEVATOR_WALL_COLOR = 'SET_DEFAULT_ELEVATOR_WALL_COLOR';
const SET_DEFAULT_ELEVATOR_WALL_OPACITY = 'SET_DEFAULT_ELEVATOR_WALL_OPACITY';
const SET_DEFAULT_ELEVATOR_WALL_TRANSPARENT = 'SET_DEFAULT_ELEVATOR_WALL_TRANSPARENT';
const SET_DEFAULT_ELEVATOR_CAPACITY = 'SET_DEFAULT_ELEVATOR_CAPACITY';
const SET_DEFAULT_ELEVATOR_SPEED = 'SET_DEFAULT_ELEVATOR_SPEED';
const SET_DEFAULT_ELEVATOR_COVERED_FLOORS = 'SET_DEFAULT_ELEVATOR_COVERED_FLOORS';
const SET_DEFAULT_ELEVATOR_CURRENT_FLOOR = 'SET_DEFAULT_ELEVATOR_CURRENT_FLOOR';

class SetElevators implements Action {
    type = SET_ELEVATORS;
    constructor(public payload: Elevator[]) {}
}

class CreateNewElevator implements Action {
    type = CREATE_NEW_ELEVATOR;
    constructor(public payload: any = undefined) {}
}

class SetDefaultElevatorWallColor implements Action {
    type = SET_DEFAULT_ELEVATOR_WALL_COLOR;
    constructor(public payload: string) {}
}

class SetDefaultElevatorWallOpacity implements Action {
    type = SET_DEFAULT_ELEVATOR_WALL_OPACITY;
    constructor(public payload: number) {}
}

class SetDefaultElevatorWallTransparent implements Action {
    type = SET_DEFAULT_ELEVATOR_WALL_TRANSPARENT;
    constructor(public payload: boolean) {}
}

class SetDefaultElevatorCapacity implements Action {
    type = SET_DEFAULT_ELEVATOR_CAPACITY;
    constructor(public payload: number) {}
}

class SetDefaultElevatorSpeed implements Action {
    type = SET_DEFAULT_ELEVATOR_SPEED;
    constructor(public payload: number) {}
}

class SetDefaultElevatorCoveredFloors implements Action {
    type = SET_DEFAULT_ELEVATOR_COVERED_FLOORS;
    constructor(public payload: number) {}
}

class SetDefaultElevatorCurrentFloor implements Action {
    type = SET_DEFAULT_ELEVATOR_CURRENT_FLOOR;
    constructor(public payload: number) {}
}

export default {
    SetElevators,
    CreateNewElevator,
    SetDefaultElevatorWallColor,
    SetDefaultElevatorWallOpacity,
    SetDefaultElevatorWallTransparent,
    SetDefaultElevatorCapacity,
    SetDefaultElevatorSpeed,
    SetDefaultElevatorCoveredFloors,
    SetDefaultElevatorCurrentFloor,

    SET_ELEVATORS,
    CREATE_NEW_ELEVATOR,
    SET_DEFAULT_ELEVATOR_WALL_COLOR,
    SET_DEFAULT_ELEVATOR_WALL_OPACITY,
    SET_DEFAULT_ELEVATOR_WALL_TRANSPARENT,
    SET_DEFAULT_ELEVATOR_CAPACITY,
    SET_DEFAULT_ELEVATOR_SPEED,
    SET_DEFAULT_ELEVATOR_COVERED_FLOORS,
    SET_DEFAULT_ELEVATOR_CURRENT_FLOOR,
};

