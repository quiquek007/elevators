import BackgroundActions from './background.actions';
import { Background } from './background.model'
import DefaultState from '../default-state.provider';
import BACKGROUND from 'src/app/constants/background.constants';


let defaultState = new DefaultState().getState();
if (!defaultState) {
	defaultState = {
		color: BACKGROUND.defaultColor
	}
} else {
	defaultState = defaultState[BACKGROUND.key];
}

export function backgroundReducer(state: Background = defaultState, action: any) {
	switch (action.type) {
  		case BackgroundActions.SET_COLOR:
  			return { ...state, color: action.payload };

  		case BackgroundActions.RESET_COLOR:
  			return { ...state, color: BACKGROUND.defaultColor };

  		default:
  			return state;
	}
}