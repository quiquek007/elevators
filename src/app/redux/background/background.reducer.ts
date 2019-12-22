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
			return { 
				...state,
				grid: { ...state.grid, gridColor: action.payload }
			}; 

		case BackgroundActions.RESET_GRID_COLOR:
			return { 
				...state,
				grid: { ...state.grid, gridColor: BACKGROUND.grid.gridColor }
			}; 

		case BackgroundActions.SET_GRID_SETTINGS_EXPAND:
			return { 
				...state,
				grid: { ...state.grid, gridSettingsExpanded: action.payload }
			}; 

		case BackgroundActions.SET_GRID_ENABLE:
			return { 
				...state,
				grid: { ...state.grid, gridEnable: action.payload }
			}; 

		case BackgroundActions.SET_GRID_OPACITY:
			return { 
				...state,
				grid: { ...state.grid, gridOpacity: action.payload }
			}; 

		case BackgroundActions.SET_GRID_SIZE:
			return { 
				...state,
				grid: { ...state.grid, gridSize: action.payload }
			}; 
			
		case BackgroundActions.RESET_GRID_SIZE:
			return { 
				...state,
				grid: { ...state.grid, gridSize: BACKGROUND.grid.gridSize }
			}; 
			
		case BackgroundActions.SET_RENDERER_EXPAND:
			return { 
				...state,
				renderer: { ...state.renderer, rendererSettingsExpanded: action.payload }
			}; 
			
		case BackgroundActions.SET_RENDERER_ALPHA:
			return { 
				...state,
				renderer: { ...state.renderer, rendererAlpha: action.payload }
			}; 
			
		case BackgroundActions.SET_RENDERER_ANTIALIAS:
			return { 
				...state,
				renderer: { ...state.renderer, rendererAntialias: action.payload }
			}; 
			
		case BackgroundActions.SET_CONTROLS_SETTINGS_EXPAND:
			return { 
				...state,
				controls: { ...state.controls, controlsSettingsExpanded: action.payload }
			}; 
			
		case BackgroundActions.SET_CONTROLS_ENABLE_DUMPING:
			return { 
				...state,
				controls: { ...state.controls, enableDamping: action.payload }
			}; 
			
		case BackgroundActions.SET_CONTROLS_DUMPING_FACTOR:
			return { 
				...state,
				controls: { ...state.controls, dampingFactor: action.payload }
			}; 
			
		case BackgroundActions.RESET_CONTROLS_DUMPING_FACTOR:
			return { 
				...state,
				controls: { ...state.controls, dampingFactor: BACKGROUND.controls.dampingFactor }
			}; 

  		default:
  			return state;
	}
}