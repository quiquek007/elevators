import { SettingsForm } from './settings-form.model';
import SettingsFormReducer from './settings-form.actions';
import SETTINGSFORM from 'src/app/constants/settings-form.constants';
import DefaultState from '../default-state.provider';

let defaultState = new DefaultState().getState();
if (!defaultState) {
	defaultState = SETTINGSFORM
} else {
	defaultState = defaultState[SETTINGSFORM.key];
}

export function settingsFormReducer(state: SettingsForm = defaultState, action: any) {
	switch (action.type) {
  		case SettingsFormReducer.SET_FORM_OPENED:
  			return { ...state, formOpened: action.payload };

  		case SettingsFormReducer.SET_POSITION:
            return { ...state, position: action.payload };

  		default:
  			return state;
	}
}