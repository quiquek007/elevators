import { BuildingSettings } from './building-settings.model';
import DefaultState from '../default-state.provider';
import buildingSettings from 'app/constants/building-settings.constants';
import buildingSettingsActions from './building-settings.actions';

let defaultState = new DefaultState().getState();
defaultState = !defaultState ? buildingSettings : defaultState[buildingSettings.key];

export function buildingSettingsReducer(state: BuildingSettings = defaultState, action: any) {
	switch (action.type) {
  		case buildingSettingsActions.SET_ELEVATORS:
  			return { ...state, elevators: action.payload };
		  
		case buildingSettingsActions.CREATE_NEW_ELEVATOR:
  			return { ...state, createNewElevator: action.payload };
		  
		case buildingSettingsActions.SET_DEFAULT_ELEVATOR_WALL_COLOR:
			return {
				...state,
				defaultElevator: { ...state.defaultElevator, wallColor: action.payload }
			};
		  
		case buildingSettingsActions.SET_DEFAULT_ELEVATOR_WALL_OPACITY:
			return {
				...state,
				defaultElevator: { ...state.defaultElevator, wallOpacity: action.payload }
			};
		  
		case buildingSettingsActions.SET_DEFAULT_ELEVATOR_WALL_TRANSPARENT:
			return {
				...state,
				defaultElevator: { ...state.defaultElevator, wallTransparent: action.payload }
			};
		  
		case buildingSettingsActions.SET_DEFAULT_ELEVATOR_CAPACITY:
			return {
				...state,
				defaultElevator: { ...state.defaultElevator, capacity: action.payload }
			};
		  
		case buildingSettingsActions.SET_DEFAULT_ELEVATOR_SPEED:
			return {
				...state,
				defaultElevator: { ...state.defaultElevator, speed: action.payload }
			};
		  
		case buildingSettingsActions.SET_DEFAULT_ELEVATOR_COVERED_FLOORS:
			return {
				...state,
				defaultElevator: { ...state.defaultElevator, coveredFloors: action.payload }
			};
		  
		case buildingSettingsActions.SET_DEFAULT_ELEVATOR_CURRENT_FLOOR:
			return {
				...state,
				defaultElevator: { ...state.defaultElevator, currentFloor: action.payload }
			};

  		default:
  			return state;
	}
}