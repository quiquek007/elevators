import GeneralActions from './general-settings.actions';
import { GeneralSettings } from './general-settings.model'
import DefaultState from '../default-state.provider';
import generalSettings from 'app/constants/general-settings.constants';

let defaultState = new DefaultState().getState();
if (!defaultState) {
	defaultState = generalSettings
} else {
	defaultState = defaultState[generalSettings.key];
}

export function generalSettingsReducer(state: GeneralSettings = defaultState, action: any) {
	switch (action.type) {
  		case GeneralActions.SET_GENERAL_SETTINGS_COLOR:
  			return { ...state, backgroundColor: action.payload };

  		case GeneralActions.RESET_GENERAL_SETTINGS_COLOR:
			  return { ...state, backgroundColor: generalSettings.backgroundColor };

  		case GeneralActions.RESET_GENERAL_SETTINGS_ALL_SETTINGS: return generalSettings;
			  
		case GeneralActions.SET_GRID_COLOR:
			return { 
				...state,
				grid: { ...state.grid, gridColor: action.payload }
			}; 

		case GeneralActions.RESET_GRID_COLOR:
			return { 
				...state,
				grid: { ...state.grid, gridColor: generalSettings.grid.gridColor }
			}; 

		case GeneralActions.SET_GRID_SETTINGS_EXPAND:
			return { 
				...state,
				grid: { ...state.grid, gridSettingsExpanded: action.payload }
			}; 

		case GeneralActions.SET_GRID_ENABLE:
			return { 
				...state,
				grid: { ...state.grid, gridEnable: action.payload }
			}; 

		case GeneralActions.SET_GRID_OPACITY:
			return { 
				...state,
				grid: { ...state.grid, gridOpacity: action.payload }
			}; 

		case GeneralActions.SET_GRID_SIZE:
			return { 
				...state,
				grid: { ...state.grid, gridSize: action.payload }
			}; 
			
		case GeneralActions.RESET_GRID_SIZE:
			return { 
				...state,
				grid: { ...state.grid, gridSize: generalSettings.grid.gridSize }
			}; 
			
		case GeneralActions.SET_RENDERER_EXPAND:
			return { 
				...state,
				renderer: { ...state.renderer, rendererSettingsExpanded: action.payload }
			}; 
			
		case GeneralActions.SET_RENDERER_ALPHA:
			return { 
				...state,
				renderer: { ...state.renderer, rendererAlpha: action.payload }
			}; 
			
		case GeneralActions.SET_RENDERER_ANTIALIAS:
			return { 
				...state,
				renderer: { ...state.renderer, rendererAntialias: action.payload }
			}; 
			
		case GeneralActions.SET_CONTROLS_SETTINGS_EXPAND:
			return { 
				...state,
				controls: { ...state.controls, controlsSettingsExpanded: action.payload }
			}; 
			
		case GeneralActions.SET_CONTROLS_ENABLE_DUMPING:
			return { 
				...state,
				controls: { ...state.controls, enableDamping: action.payload }
			}; 
			
		case GeneralActions.SET_CONTROLS_DUMPING_FACTOR:
			return { 
				...state,
				controls: { ...state.controls, dampingFactor: action.payload }
			}; 
			
		case GeneralActions.RESET_CONTROLS_DUMPING_FACTOR:
			return { 
				...state,
				controls: { ...state.controls, dampingFactor: generalSettings.controls.dampingFactor }
			}; 
			
		case GeneralActions.SET_CONTROLS_CAMERA_MIN_DISTANCE:
			return { 
				...state,
				controls: { ...state.controls, cameraMinDistance: action.payload }
			}; 
			
		case GeneralActions.SET_CONTROLS_CAMERA_MAX_DISTANCE:
			return { 
				...state,
				controls: { ...state.controls, cameraMaxDistance: action.payload }
			}; 

  		default:
  			return state;
	}
}