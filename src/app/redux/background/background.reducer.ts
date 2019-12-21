import BackgroundActions from './background.actions';
import { Background } from './background.model'
import DefaultState from '../default-state.provider';
import BACKGROUND from 'src/app/constants/background.constants';

let defaultState = new DefaultState().getState();
if (!defaultState) {
	defaultState = BACKGROUND
} else {
	defaultState = defaultState[BACKGROUND.key];
}

export function backgroundReducer(state: Background = defaultState, action: any) {
	switch (action.type) {
  		case BackgroundActions.SET_BACKGROUND_COLOR:
  			return { ...state, backgroundColor: action.payload };

  		case BackgroundActions.RESET_BACKGROUND_COLOR:
			  return { ...state, backgroundColor: BACKGROUND.backgroundColor };
			  
		case BackgroundActions.SET_GRID_COLOR:
  			return { ...state, gridColor: action.payload };

		case BackgroundActions.RESET_GRID_COLOR:
			return { ...state, gridColor: BACKGROUND.gridColor };

		case BackgroundActions.SET_GRID_SETTINGS_EXPAND:
			return { ...state, gridSettingsExpanded: action.payload };

		case BackgroundActions.SET_GRID_ENABLE:
			return { ...state, gridEnable: action.payload };

		case BackgroundActions.SET_GRID_OPACITY:
			return { ...state, gridOpacity: action.payload };

		case BackgroundActions.SET_GRID_SIZE:
			return { ...state, gridSize: action.payload };
			
		case BackgroundActions.RESET_GRID_SIZE:
			return { ...state, gridSize: BACKGROUND.gridSize };
			
		case BackgroundActions.SET_RENDERER_EXPAND:
			return { ...state, rendererSettingsExpanded: action.payload };
			
		case BackgroundActions.SET_RENDERER_ALPHA:
			return { ...state, rendererAlpha: action.payload };
			
		case BackgroundActions.SET_RENDERER_ANTIALIAS:
			return { ...state, rendererAntialias: action.payload };
			
		case BackgroundActions.SET_CONTROLS_SETTINGS_EXPAND:
			return { ...state, controlsSettingsExpanded: action.payload };
			
		case BackgroundActions.SET_CONTROLS_DUMPING:
			return { ...state, controls: action.payload };

  		default:
  			return state;
	}
}