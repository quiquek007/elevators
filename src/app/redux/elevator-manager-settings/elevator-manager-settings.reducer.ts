import { ElevatorManagerSettings } from './elevator-manager-settings.model';
import DefaultState from '../default-state.provider';
import elevatorManagerSettings from 'app/constants/elevator-manager-settings.constants';
import ElevatorManagerActions from './elevator-manager-settings.actions';

let defaultState = new DefaultState().getState();
defaultState = !defaultState ? elevatorManagerSettings : defaultState[elevatorManagerSettings.key];

export function elevatorManagerReducer(state: ElevatorManagerSettings = defaultState, action: any) {
    switch (action.type) {
        case ElevatorManagerActions.ADD_NEW_ELEVATOR:
            return { ...state, elevators: [...state.elevators, action.payload] };

        case ElevatorManagerActions.SET_ELEVATOR_WALL_COLOR:
            return { ...state, defaultElevator: { ...state.defaultElevator, wallColor: action.payload } };

        case ElevatorManagerActions.SET_ELEVATOR_WALL_OPACITY:
            return { ...state, defaultElevator: { ...state.defaultElevator, wallOpacity: action.payload } };

        case ElevatorManagerActions.SET_ELEVATOR_WALL_TRANSPARENT:
            return { ...state, defaultElevator: { ...state.defaultElevator, wallTransparent: action.payload } };

        case ElevatorManagerActions.SET_ELEVATOR_CAPACITY:
            return { ...state, defaultElevator: { ...state.defaultElevator, capacity: action.payload } };

        case ElevatorManagerActions.SET_ELEVATOR_SPEED:
            return { ...state, defaultElevator: { ...state.defaultElevator, speed: action.payload } };

        case ElevatorManagerActions.SET_ELEVATOR_COVERED_FLOORS:
            return { ...state, defaultElevator: { ...state.defaultElevator, coveredFloors: action.payload } };

        case ElevatorManagerActions.SET_ELEVATOR_CURRENT_FLOOR:
            return { ...state, defaultElevator: { ...state.defaultElevator, currentFloor: action.payload } };

        case ElevatorManagerActions.SET_WIREFRAMES_EXPAND:
            return { ...state, wireframes: { ...state.wireframes, wireframesSettingsExpanded: action.payload } };

        case ElevatorManagerActions.SET_WIREFRAMES_SHOWED:
            return { ...state, wireframes: { ...state.wireframes, isWireframesShowed: action.payload } };

        case ElevatorManagerActions.SET_WIREFRAMES_COLOR:
            return { ...state, wireframes: { ...state.wireframes, color: action.payload } };

        case ElevatorManagerActions.RESET_ELEVATOR_MANAGER_SETTINGS_ALL_SETTINGS:
            return elevatorManagerSettings;

        default:
            return state;
    }
}
