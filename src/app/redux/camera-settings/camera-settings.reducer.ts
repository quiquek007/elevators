import { CameraSettings } from './camera-settings.model';
import DefaultState from '../default-state.provider';
import cameraSettings from 'app/constants/camera-settings.constants';
import cameraSettingsActions from './camera-settings.actions';

let defaultState = new DefaultState().getState();
defaultState = !defaultState ? cameraSettings : defaultState[cameraSettings.key];

export function cameraSettingsReducer(state: CameraSettings = defaultState, action: any) {
	switch (action.type) {
  		case cameraSettingsActions.SET_CAMERA_POSITION:
  			return { ...state, cameraPosition: action.payload };
		  
		case cameraSettingsActions.RESET_CAMERA_POSITION:
  			return { ...state, cameraPosition: cameraSettings.cameraPosition };
		  
		case cameraSettingsActions.SET_CONTROLS_TARGET:
			return { ...state, controlsTarget: action.payload };
		  
		case cameraSettingsActions.RESET_CONTROLS_TARGET:
			return { ...state, controlsTarget: cameraSettings.controlsTarget };

  		default:
  			return state;
	}
}