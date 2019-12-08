import { SettingsForm } from './settings-form.model';
import SettingsFormReducer from './settings-form.actions';

const defaultState: SettingsForm = {
    position: 'left',
    formOpened: false
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