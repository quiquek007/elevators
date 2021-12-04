import { SettingsForm } from './settings-form.model';
import SettingsFormActions from './settings-form.actions';
import settingsForm from 'app/constants/settings-form.constants';
import DefaultState from '../default-state.provider';

let defaultState = new DefaultState().getState();
defaultState = !defaultState ? settingsForm : defaultState[settingsForm.key];

export function settingsFormReducer(state: SettingsForm = defaultState, action: any) {
	switch (action.type) {
  		case SettingsFormActions.SET_FORM_OPENED:
  			return { ...state, formOpened: action.payload };

  		case SettingsFormActions.SET_FORM_POSITION:
            return { ...state, formPosition: action.payload };

  		case SettingsFormActions.SET_SELECTED_TAB:
            return { ...state, selectedTab: action.payload };

  		default:
  			return state;
	}
}