import { SettingsPanel } from './settings-panel.model';
import SettingsPanelActions from './settings-panel.actions';
import settingsPanel from 'app/constants/settings-panel.constants';
import DefaultState from '../default-state.provider';

let defaultState = new DefaultState().getState();
defaultState = !defaultState ? settingsPanel : defaultState[settingsPanel.key];

export function settingsPanelReducer(state: SettingsPanel = defaultState, action: any) {
	switch (action.type) {
  		case SettingsPanelActions.SET_PANEL_OPENED:
  			return { ...state, formOpened: action.payload };

  		case SettingsPanelActions.SET_PANEL_POSITION:
            return { ...state, formPosition: action.payload };

  		case SettingsPanelActions.SET_SELECTED_TAB:
            return { ...state, selectedTab: action.payload };

  		default:
  			return state;
	}
}