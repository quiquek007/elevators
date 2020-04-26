import { SettingsForm } from './settings-form.model';
import SettingsFormActions from './settings-form.actions';
import settingsForm from 'src/app/constants/settings-form.constants';
import DefaultState from '../default-state.provider';

let defaultState = new DefaultState().getState();
if (!defaultState) {
	defaultState = settingsForm
} else {
	defaultState = defaultState[settingsForm.key];
}

export function settingsFormReducer(state: SettingsForm = defaultState, action: any) {
	switch (action.type) {
  		case SettingsFormActions.SET_FORM_OPENED:
  			return { ...state, formOpened: action.payload };

  		case SettingsFormActions.SET_FORM_POSITION:
            return { ...state, formPosition: action.payload };

  		default:
  			return state;
	}
}